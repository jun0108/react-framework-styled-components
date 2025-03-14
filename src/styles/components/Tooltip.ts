import styled, { css } from "styled-components"
import { typo } from '~/styles/helpers/mixins'

export const TooltipWrapper = styled.div`
  position: relative;
`

export const TooltipBox = styled.div<{ $position: "top" | "bottom" | "left" | "right" }>`
  ${typo({ size: "var(--font-size-14)", weight: 500, color: "var(--color-white)" })};
  position: absolute;
  z-index: 10;
  background: rgba(0, 0, 0, 0.75);
  padding: 6px 10px;
  border-radius: var(--radius-md);
  white-space: nowrap;
  user-select: none;
  pointer-events: none;
  transition: var(--transition);

  ${({ $position }) =>
		$position === "top" &&
    css`
      top: 0;
      left: 50%;
      transform: translate(-50%, calc(-100% - 2px));
    `}
  ${({ $position }) =>
		$position === "bottom" &&
    css`
      bottom: 0;
      left: 50%;
      transform: translate(-50%, calc(100% + 2px));
    `}
  ${({ $position }) =>
		$position === "left" &&
    css`
      top: 50%;
      right: 100%;
      transform: translate(-2px, -50%);
    `}
  ${({ $position }) =>
		$position === "right" &&
    css`
      top: 50%;
      left: 100%;
      transform: translate(2px, -50%);
    `}

  &.tooltip-fade-enter {
    opacity: 0;
  }
  &.tooltip-fade-enter-active {
    opacity: 1;
    transition: 0.2s ease-out;
  }
  &.tooltip-fade-exit {
    opacity: 1;
  }
  &.tooltip-fade-exit-active {
    opacity: 0;
    transition: 0.2s ease-out;
  }
`