import styled from 'styled-components'

/*/* ========================== Variables ========================== */

/* ========================== Mixins ========================== */

/* ========================== Styles ========================== */
export const TextfieldLabel = styled.label<{ $labelPosition: "vertical" | "horizontal" }>`
  ${typo({ size: "var(--font-size-16)", weight: 500, color: "var(--color-gray-800)" })};
  margin: ${({ $labelPosition }) => ($labelPosition === "vertical" ? "0 0 4px 0" : "0 8px 0 0")};
`;

export const TextfieldWrapper = styled.div<{ $labelPosition: "vertical" | "horizontal" }>`
  display: flex;
  align-items: ${({ $labelPosition }) => ($labelPosition === "vertical" ? "flex-start" : "center")};
  flex-direction: ${({ $labelPosition }) => ($labelPosition === "vertical" ? "column" : "row")};
`;

export const TextfieldInput = styled.input<{ $isValid: boolean }>`
  ${typo({ size: "var(--font-size-14)", weight: 500, color: "var(--color-gray-900)" })};
  min-width: 250px;
  height: var(--form-height-md);
  padding: 0 8px;
  background: var(--color-gray-100);
  border: 1px solid ;
  border-color: ${({ $isValid }) => ($isValid ? "var(--color-red-900)" : "var(--color-gray-500)")};
  border-radius: var(--radius-md);
  caret-color: var(--color-primary-800);
  transition: var(--transition);
  &::placeholder {
    color: var(--color-gray-500);
  }
  &:hover,
  &:focus {
    border-color: var(--color-primary-800);
  }
  &:disabled {
    background-color: var(--color-gray-400);
    border-color: var(--color-gray-500);
  }
`;

export const TextfieldTextarea = styled.textarea<{ $isValid: boolean }>`
  ${typo({ size: "var(--font-size-14)", weight: 500, color: "var(--color-gray-900)" })};
  min-width: 250px;
  min-height: 150px;
  padding: 0 8px;
  background: var(--color-gray-100);
  border: 1px solid ;
  border-color: ${({ $isValid }) => ($isValid ? "var(--color-red-900)" : "var(--color-gray-500)")};
  border-radius: var(--radius-md);
  caret-color: var(--color-primary-800);
  transition: var(--transition);
  &::placeholder {
    color: var(--color-gray-500);
  }
  &:hover,
  &:focus {
    border-color: var(--color-primary-800);
  }
  &:disabled {
    background-color: var(--color-gray-400);
    border-color: var(--color-gray-500);
  }
`;
