import styled from 'styled-components'
import { typo } from '~/styles/helpers/mixins'

export const DropdownWrapper = styled.div<{ $labelPosition: "vertical" | "horizontal" }>`
  display: flex;
  align-items: ${({ $labelPosition }) => ($labelPosition === "vertical" ? "flex-start" : "center")};
  flex-direction: ${({ $labelPosition }) => ($labelPosition === "vertical" ? "column" : "row")};
  > div {
    position: relative;
    display: flex;
    flex-direction: column;
    height: var(--form-height-md);
  }
`

export const DropdownInput = styled.div<{ $disabled: boolean, $readonly: boolean, $isValid: boolean }>`
  ${({ $isValid }) =>
		typo({size: "var(--font-size-14)", weight: 500, color: $isValid ? "var(--color-red-900)" : "var(--color-gray-900)"})
};
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1 1 0%;
  min-width: 150px;
  height: var(--form-height-md);
  padding: 0 8px;
  background: var(--color-white);
  border: 1px solid;
  border-color: ${({ $isValid }) => ($isValid ? "var(--color-red-900)" : "var(--color-gray-500)")};
  border-radius: var(--radius-md);
  caret-color: ${({ $isValid }) => ($isValid ? "var(--color-red-900)" : "var(--color-primary-800)")};
  cursor: pointer;
  transition: var(--transition);
  ${({ $disabled }) =>
		$disabled &&
    `
    background-color: var(--color-gray-400);
    border-color: var(--color-gray-500);
    color: var(--color-gray-600);
    cursor: not-allowed;
  `}

  ${({ $readonly }) =>
		$readonly &&
    `
    background-color: var(--color-gray-300);
    border-color: var(--color-gray-400);
    color: var(--color-gray-700);
    cursor: default;
  `}
  ${({ $disabled, $readonly }) =>
		!$disabled && !$readonly &&
    `
    &:hover,
    &:focus {
      border-color: var(--color-primary-800);
    }
  `}
`

export const DropdownPlaceholder = styled.span`
  color: var(--color-gray-500);
  user-select: none;
`
export const DropdownArrow = styled.div<{ $isOpen: boolean, $disabled: boolean}>`
  transform: ${({ $isOpen }) => ($isOpen ? "rotate(180deg)" : "rotate(0)")};
  user-select: none;
  pointer-events: none;
  transition: var(--transition);
  opacity: ${({ $disabled }) => ($disabled ? "0.5" : "1")};
`

export const OptionsList = styled.div`
  overflow-y: auto;
  position: absolute;
  top: calc(var(--form-height-md) + 2px);
  left: 0;
  z-index: calc(var(--z-index-dimmed) - 3);
  width: 100%;
  max-height: 150px;
  background: var(--color-white);
  border: 1px solid var(--color-gray-500);
  border-radius: var(--radius-md);
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);

  &.dropdown-slide-enter {
    overflow-y: hidden;
    height: 0;
  }
  &.dropdown-slide-enter-active {
    height: calc-size(max-content, size);
    opacity: 1;
    transition: 0.2s ease-out;
  }
  &.dropdown-slide-exit {
    height: calc-size(max-content, size);
    opacity: 1;
  }
  &.dropdown-slide-exit-active {
    overflow-y: hidden;
    height: 0;
    transition: 0.2s ease-out;
  }
`

export const OptionItem = styled.div<{ selected: boolean }>`
  ${({ selected }) =>
		typo({size: "var(--font-size-14)", weight: selected ? 500 : 400, color: selected ? "var(--color-white)" : "var(--color-gray-900)"})
};
  padding: 10px;
  background: ${(props) => (props.selected ? "var(--color-primary-700)" : "var(--color-white)")};
  transition: var(--transition);
  cursor: pointer;
  &:hover {
    background: ${(props) => (props.selected ? "var(--color-primary-700)" : "var(--color-gray-300)")};
  }
`