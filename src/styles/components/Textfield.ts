import styled from 'styled-components'

/*/* ========================== Variables ========================== */

/* ========================== Mixins ========================== */

/* ========================== Styles ========================== */
export const TextfieldLabel = styled.label<{ $labelPosition: "vertical" | "horizontal" }>`
  ${typo({ size: "var(--font-size-16)", weight: 500, color: "var(--color-gray-800)"})};
  margin: ${({ $labelPosition }) => ($labelPosition === "vertical" ? "0 0 4px 0" : "0 8px 0 0")};
`

export const TextfieldWrapper = styled.div<{ $labelPosition: "vertical" | "horizontal" }>`
  display: flex;
  align-items: ${({ $labelPosition }) => ($labelPosition === "vertical" ? "flex-start" : "center")};
  flex-direction: ${({ $labelPosition }) => ($labelPosition === "vertical" ? "column" : "row")};
`

export const TextfieldMessage = styled.p`
  ${typo({ size: "var(--font-size-12)", weight: 500, color: "var(--color-red-900)" })};
`

export const TextfieldInput = styled.input<{ $isValid: boolean }>`
  ${({ $isValid }) =>
		typo({size: "var(--font-size-14)", weight: 500, color: $isValid ? "var(--color-red-900)" : "var(--color-gray-900)"})
};
  min-width: 250px;
  height: var(--form-height-md);
  padding: 0 8px;
  background: var(--color-white);
  border: 1px solid ;
  border-color: ${({ $isValid }) => ($isValid ? "var(--color-red-900)" : "var(--color-gray-500)")};
  border-radius: var(--radius-md);
  caret-color: ${({ $isValid }) => ($isValid ? "var(--color-red-900)" : "var(--color-primary-800)")};
  transition: var(--transition);
  &::placeholder {
    color: var(--color-gray-500);
  }
  &:hover,
  &:focus {
    border-color: ${({ $isValid }) => ($isValid ? "var(--color-red-900)" : "var(--color-primary-800)")};
  }
  &:disabled {
    background-color: var(--color-gray-400);
    border-color: var(--color-gray-500);
    color: var(--color-gray-600);
  }
  &:read-only&:not(&:disabled) {
    background-color: var(--color-gray-300);
    border-color: var(--color-gray-400);
    color: var(--color-gray-700);
  }
`

export const TextfieldTextarea = styled.textarea<{ $isValid: boolean, $resize: "none" | "both" | "horizontal" | "vertical"; }>`
  ${({ $isValid }) =>
		typo({size: "var(--font-size-14)", weight: 500, color: $isValid ? "var(--color-red-900)" : "var(--color-gray-900)"})
};
  display: flex;
  min-width: 250px;
  min-height: 150px;
  padding: 8px;
  background: var(--color-white);
  border: 1px solid ;
  border-color: ${({ $isValid }) => ($isValid ? "var(--color-red-900)" : "var(--color-gray-500)")};
  border-radius: var(--radius-md);
  caret-color: ${({ $isValid }) => ($isValid ? "var(--color-red-900)" : "var(--color-primary-800)")};
  transition: var(--transition);
  resize: ${({ $resize }) => $resize};  
  &::placeholder {
    color: var(--color-gray-500);
  }
  &:hover,
  &:focus {
    border-color: ${({ $isValid }) => ($isValid ? "var(--color-red-900)" : "var(--color-primary-800)")};
  }
  &:disabled {
    background-color: var(--color-gray-400);
    border-color: var(--color-gray-500);
    color: var(--color-gray-600);
  }
  &:read-only&:not(&:disabled) {
    background-color: var(--color-gray-300);
    border-color: var(--color-gray-400);
    color: var(--color-gray-700);
  }
`
