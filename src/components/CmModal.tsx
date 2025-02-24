import React from "react";
import { PopupOverlay, ModalContainer, PopupHeader, PopupTitle, CloseButton, PopupContent, PopupFooter } from "~/styles/components/Popups";

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
  if (!isOpen) return null;

  return (
    <PopupOverlay>
      <ModalContainer>
        {useHeader && (
          <PopupHeader>
            {popupTitle && <PopupTitle>{popupTitle}</PopupTitle>}
            <CloseButton onClick={onClose}>×</CloseButton>
          </PopupHeader>
        )}
        <PopupContent>{children}</PopupContent>
        {useFooter && <PopupFooter>{popupFooter}</PopupFooter>}
      </ModalContainer>
    </PopupOverlay>
  );
}

export default CmModal;