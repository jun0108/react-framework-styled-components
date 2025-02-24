import styled from "styled-components";
/* ========================== Variables ========================== */

/* ========================== Mixins ========================== */

/* ========================== Styles ========================== */
export const PopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  transition: var(--transition);
`;

export const PopupHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 12px;
  border-bottom: 1px solid var(--color-gray-300);
`;

export const PopupContent = styled.div`
  ${typo({})};
  overflow-y: auto;
  max-height: 600px;
  padding: 12px 0;
`;

export const PopupFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: 12px;
  button + button {
    margin-left: 8px;
  }
`;

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  padding: 12px 20px;
  background: var(--color-white);
  border-radius: var(--radius-md);
`;

export const ConfirmContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  padding: 12px 20px;
  background: var(--color-white);
  border-radius: var(--radius-md);
`;

export const PopupTitle = styled.h2`
  ${typo({ size: "var(--font-size-18)", weight: 600, color: "var(--color-gray-900)"})};
`;

export const CloseButton = styled.button`
  ${typo({ size: "var(--font-size-20)", weight: 600, color: "var(--color-gray-900)"})};
`;

