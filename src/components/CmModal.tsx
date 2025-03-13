import React, { useState, useEffect, useRef } from "react"
import { CSSTransition } from "react-transition-group"
import { 
	PopupOverlay, 
	ModalContainer, 
	PopupHeader, 
	PopupTitle, 
	CloseButton, 
	PopupContent, 
	ModalFooter 
} from "~/styles/components/Popups"

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  popupTitle?: string;
  useHeader?: boolean;
  useFooter?: boolean;
  popupFooter?: React.ReactNode; 
  children: React.ReactNode;
}

function CmModal({
	isOpen,
	onClose,
	popupTitle,
	useHeader = true,
	useFooter = true,
	popupFooter,
	children
}: ModalProps) {
	const [isFade, setIsFade] = useState(false)
	const [isSlide, setIsSlide] = useState(false)
	const overlayRef = useRef(null)
	const containerRef = useRef(null)

	useEffect(() => {
		if (isOpen) {
			setTimeout(() => setIsFade(true), 10) 
			setTimeout(() => setIsSlide(true), 20) 
		} else {
			setIsFade(false) 
			setIsSlide(false) 
		}
	}, [isOpen])

	return (
		<CSSTransition in={isFade} timeout={200} classNames="fade" unmountOnExit nodeRef={overlayRef}>
			<PopupOverlay ref={overlayRef}>
				<CSSTransition in={isSlide} timeout={200} classNames="slide" unmountOnExit nodeRef={containerRef}>
					<ModalContainer ref={containerRef}>
						{useHeader && (
							<PopupHeader>
								{popupTitle && <PopupTitle>{popupTitle}</PopupTitle>}
								<CloseButton onClick={onClose}>✖</CloseButton>
							</PopupHeader>
						)}
						<PopupContent>{children}</PopupContent>
						{useFooter && <ModalFooter>{popupFooter}</ModalFooter>}
					</ModalContainer>
				</CSSTransition>
			</PopupOverlay>
		</CSSTransition>
	)
}

export default CmModal