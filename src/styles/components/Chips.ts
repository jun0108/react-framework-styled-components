import { css } from "styled-components"

/* ========================== Variables ========================== */
const chipSize: Record<"sm" | "md" | "lg" | "xl", { minWidth: string; height: string; padding: string }> = {
	sm: { minWidth: "60px", height: "var(--form-height-sm)", padding: "10px" },
	md: { minWidth: "80px", height: "var(--form-height-md)", padding: "10px" },
	lg: { minWidth: "100px", height: "var(--form-height-lg)", padding: "20px" },
	xl: { minWidth: "120px", height: "var(--form-height-xl)", padding: "20px" },
}

const chipColor = {
	solid: {
		primary: { text: "var(--color-white)", default: "var(--color-primary-800)" },
		secondary: { text: "var(--color-white)", default: "var(--color-secondary-800)" },
		gray: { text: "var(--color-gray-700)", default: "var(--color-gray-400)" },
	},
	line: {
		primary: { text: "var(--color-primary-800)", default: "var(--color-primary-800)" },
		secondary: { text: "var(--color-gray-500)", default: "var(--color-gray-100)" },
		gray: { text: "var(--color-gray-700)", default: "var(--color-gray-400)" },
	},
}

/* ========================== Mixins ========================== */
const chipBase = (size: keyof typeof chipSize) => css`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: ${chipSize[size].minWidth};
  height: ${chipSize[size].height};
  padding: 0 ${chipSize[size].padding};
  border-radius: calc(${chipSize[size].height} / 2);
  transition: var(--transition);
`

const chipVariable = (type: "solid" | "line", color: keyof typeof chipColor.solid) => css`
  font-size: var(--font-size-14);
  font-weight: 500;
  color: ${chipColor[type][color].text};
  background-color: ${type === "solid" ? chipColor[type][color].default : "var(--color-white)"};
  border: 1px solid ${chipColor[type][color].default};
`

/* ========================== Styles ========================== */
export const Chips = () => css`
  ${Object.keys(chipColor.solid).map((color) =>
		Object.keys(chipSize).map(
			(size) => css`
        .chip__full--${color}-${size} {
          ${chipBase(size as keyof typeof chipSize)}
          ${chipVariable("solid", color as keyof typeof chipColor.solid)}
        }
      `
		)
	)}
  ${Object.keys(chipColor.line).map((color) =>
		Object.keys(chipSize).map(
			(size) => css`
        .chip__line--${color}-${size} {
          ${chipBase(size as keyof typeof chipSize)}
          ${chipVariable("line", color as keyof typeof chipColor.line)}
        }
      `
		)
	)}
`