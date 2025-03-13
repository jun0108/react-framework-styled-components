import styled, { css } from 'styled-components'
import { typo } from '~/styles/helpers/mixins'
export const Dropdown = () => css`
  .dropdown-slide-enter {
    overflow-y: hidden;
    height: 0;
    max-height: 0;
    opacity: 0;
  }
  .dropdown-slide-enter-active {
    height: auto;
    max-height: 150px; /* ✅ 최대 높이 지정 (내용에 따라 조정 가능) */
    opacity: 1;
  }
  .dropdown-slide-exit {
    height: auto;
    max-height: 150px;
    opacity: 1;
  }
  .dropdown-slide-exit-active {
    overflow-y: hidden;
    height: 0;
    max-height: 0;
    opacity: 0;
  }
`
export const DropdownWrapper = styled.div<{  $labelPosition: "vertical" | "horizontal" }>`
  display: flex;
  align-items: ${({ $labelPosition }) => ($labelPosition === "vertical" ? "flex-start" : "center")};
  flex-direction: ${({ $labelPosition }) => ($labelPosition === "vertical" ? "column" : "row")};
  position: relative;
  min-width: 250px;
`

export const DropdownInput = styled.div<{ $disabled: boolean, $readonly: boolean, $isValid: boolean }>`
  ${({ $isValid }) =>
		typo({size: "var(--font-size-14)", weight: 500, color: $isValid ? "var(--color-red-900)" : "var(--color-gray-900)"})
};
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
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
export const DropdownArrow = styled.div<{ $isOpen: boolean}>`
  transform: ${({ $isOpen }) => ($isOpen ? "rotate(180deg)" : "rotate(0)")};
  user-select: none;
  pointer-events: none;
  transition: var(--transition);
`

export const OptionsList = styled.div`
  overflow-y: auto;
  position: absolute;
  top: calc(var(--form-height-md) + 2px);
  left: 0;
  width: 100%;
  background: var(--color-white);
  border: 1px solid var(--color-gray-500);
  border-radius: var(--radius-md);
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