import React from "react";
import { PopupOverlay, ModalContainer, ModalHeader, ModalTitle, CloseButton, ModalContent, ModalFooter } from "~/styles/components/Popups";

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
        {/* Header */}
        {useHeader && (
          <ModalHeader>
            {popupTitle && <ModalTitle>{popupTitle}</ModalTitle>}
            <CloseButton onClick={onClose}>×</CloseButton>
          </ModalHeader>
        )}
        {/* Content */}
        <ModalContent>{children}</ModalContent>
        {/* Footer */}
        {useFooter && <ModalFooter>{popupFooter}</ModalFooter>}
      </ModalContainer>
    </PopupOverlay>
  );
}

export default CmModal;