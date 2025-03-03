import { createRoot } from "react-dom/client"
import { useState } from "react"
import { PopupOverlay, ConfirmContainer, PopupHeader, PopupTitle, PopupContent, PopupFooter } from "~/styles/components/Popups"

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
				remove: () => {
					root.render(null)
				},
			}

			const handleConfirm = () => {
				controller.resolve(true)
				controller.remove()
			}

			const handleCancel = () => {
				controller.resolve(false)
				controller.remove()
			}

			root.render(
				<PopupOverlay>
					<ConfirmContainer>
						<PopupHeader>
							{popupTitle && <PopupTitle>{popupTitle}</PopupTitle>}
						</PopupHeader>
						<PopupContent>{content}</PopupContent>
						<PopupFooter>
							{type === 'confirm' && (
								<button type="button" onClick={handleCancel} className="btn__line--gray-sm">
									{cancelText}
								</button>
							)}			
							<button type="button" onClick={handleConfirm} className="btn__full--primary-sm">
								{confirmText}
							</button>
						</PopupFooter>
					</ConfirmContainer>
				</PopupOverlay>
			)
		})
	},
}

export default CmMessage