import { useState, useEffect, useRef } from "react"
import { createRoot } from "react-dom/client"
import { CSSTransition } from "react-transition-group"
import { 
	PopupOverlay, 
	ConfirmContainer, 
	PopupHeader, 
	PopupTitle, 
	PopupContent, 
	ConfirmFooter 
} from "~/styles/components/Popups"

interface MessageOptions {
  type?: "confirm" | "alert";
  popupTitle?: string;
  cancelText?: string;
  confirmText?: string;
  content: React.ReactNode;
}

interface MessageController {
  resolve: (value: boolean) => void;
  remove: () => void;
}

const messageModalRoot = document.createElement("div")
document.body.appendChild(messageModalRoot)
const root = createRoot(messageModalRoot)

function CmMessageComponent({
	type,
	popupTitle,
	cancelText,
	confirmText,
	content,
	controller,
}: MessageOptions & { controller: MessageController }) {
	const [isFade, setIsFade] = useState(false)
	const [isSlide, setIsSlide] = useState(false)
	const overlayRef = useRef(null)
	const containerRef = useRef(null)

	useEffect(() => {
		setTimeout(() => setIsFade(true), 10)
		setTimeout(() => setIsSlide(true), 20)
	}, [])

	const handleClose = (result: boolean) => {
		setIsFade(false)
		setIsSlide(false)
		setTimeout(() => {
			controller.resolve(result)
			controller.remove()
		}, 200) 
	}

	return (
		<CSSTransition in={isFade} timeout={200} classNames="fade" unmountOnExit nodeRef={overlayRef}>
			<PopupOverlay ref={overlayRef}>
				<CSSTransition in={isSlide} timeout={200} classNames="slide" unmountOnExit nodeRef={containerRef}>
					<ConfirmContainer ref={containerRef}>
						<PopupHeader>{popupTitle && <PopupTitle>{popupTitle}</PopupTitle>}</PopupHeader>
						<PopupContent>{content}</PopupContent>
						<ConfirmFooter>
							{type === "confirm" && (
								<button type="button" onClick={() => handleClose(false)} className="btn__line--gray-sm">
									{cancelText}
								</button>
							)}
							<button type="button" onClick={() => handleClose(true)} className="btn__full--primary-sm">
								{confirmText}
							</button>
						</ConfirmFooter>
					</ConfirmContainer>
				</CSSTransition>
			</PopupOverlay>
		</CSSTransition>
	)
}

const CmMessage = {
	open: async ({
		type = "confirm",
		popupTitle,
		cancelText = "취소",
		confirmText = "확인",
		content,
	}: MessageOptions): Promise<boolean> => {
		return new Promise((resolve) => {
			const controller: MessageController = {
				resolve,
				remove: () => root.render(null),
			}

			root.render(
				<CmMessageComponent
					type={type}
					popupTitle={popupTitle}
					cancelText={cancelText}
					confirmText={confirmText}
					content={content}
					controller={controller}
				/>
			)
		})
	},
}

export default CmMessage