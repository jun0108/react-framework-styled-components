import { css } from "styled-components"
import { typo } from "~/styles/helpers/mixins"

/* ========================== Variables ========================== */
const btnSize: Record<"sm" | "md" | "lg" | "xl", { minWidth: string; height: string; padding: string }> = {
	sm: { minWidth: "60px", height: "var(--form-height-sm)", padding: "10px" },
	md: { minWidth: "80px", height: "var(--form-height-md)", padding: "10px" },
	lg: { minWidth: "100px", height: "var(--form-height-lg)", padding: "20px" },
	xl: { minWidth: "120px", height: "var(--form-height-xl)", padding: "20px" },
}
const btnColor = {
	solid: {
		primary: { text: "var(--color-white)", default: "var(--color-primary-800)", hover: "var(--color-primary-900)", disabled: "var(--color-gray-600)" },
		secondary: { text: "var(--color-white)", default: "var(--color-secondary-800)", hover: "var(--color-secondary-900)", disabled: "var(--color-gray-600)" },
		gray: { text: "var(--color-white)", default: "var(--color-gray-700)", hover: "var(--color-gray-800)", disabled: "var(--color-gray-600)" },
	},
	line: {
		primary: { text: "var(--color-primary-800)", default: "var(--color-primary-800)", hover: "var(--color-primary-900)", disabled: "var(--color-gray-600)" },
		secondary: { text: "var(--color-secondary-800)", default: "var(--color-secondary-800)", hover: "var(--color-secondary-900)", disabled: "var(--color-gray-600)" },
		gray: { text: "var(--color-gray-700)", default: "var(--color-gray-700)", hover: "var(--color-gray-800)", disabled: "var(--color-gray-600)" },
	}
}
/* ========================== Mixins ========================== */
const btnBase = (size: keyof typeof btnSize) => css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: max-content;
  min-width: ${btnSize[size].minWidth};
  height: ${btnSize[size].height};
  padding: 0 ${btnSize[size].padding};
  border-radius: calc(${btnSize[size].height} / 2);
  cursor: pointer;
  transition: var(--transition);
  img {
    margin-right: 3px;
  }
`
const btnVariable = (type: "solid" | "line", color: keyof typeof btnColor.solid) => css`
  ${typo({ size: "var(--font-size-14)", weight: 500,  color: btnColor[type][color].text })};
  background-color: ${type === "solid" ? btnColor[type][color].default : "var(--color-white)"};
  border: 1px solid ${btnColor[type][color].default};

  &:hover:not(:disabled) {
    color: ${type === "line" ? btnColor[type][color].hover : null};
    background-color: ${type === "solid" ? btnColor[type][color].hover : "var(--color-gray-400)"};
    border-color: ${btnColor[type][color].hover};
  }

  &:disabled {
    color: ${type === "line" ? btnColor[type][color].disabled : null};
    background-color: ${type === "solid" ? btnColor[type][color].disabled : "var(--color-gray-400)"};
    border-color: ${btnColor[type][color].disabled};
  }
`
/* ========================== Styles ========================== */
export const Buttons = () => css`
  ${Object.keys(btnColor.solid).map((color) =>
		Object.keys(btnSize).map((size) => css`
      .btn__full--${color}-${size} {
        ${btnBase(size as keyof typeof btnSize)}
        ${btnVariable("solid", color as keyof typeof btnColor.solid)}
      }
    `)
	)}
  ${Object.keys(btnColor.line).map((color) =>
		Object.keys(btnSize).map((size) => css`
      .btn__line--${color}-${size} {
        ${btnBase(size as keyof typeof btnSize)}
        ${btnVariable("line", color as keyof typeof btnColor.line)}
      }
    `)
	)}
`