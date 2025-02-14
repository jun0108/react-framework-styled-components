

import { css } from "styled-components";

/* Typography */
const fontSizeMap = {
  28: "28px",
  24: "24px",
  22: "22px",
  21: "21px",
  20: "20px",
  18: "18px",
  17: "17px",
  16: "16px",
  15: "15px",
  14: "14px",
  13: "13px",
  12: "12px",
};
/* Color */
const colorMap = {
  primary: {
    900: "#065F46",
    800: "#047857",
    700: "#059669",
    600: "#10B981",
    500: "#34D399",
    400: "#6EE7B7",
    300: "#A7F3D0",
    200: "#D1FAE5",
    100: "#ECFDF5",
  },
  secondary: {
    900: "#3D2410",
    800: "#5D3817",
    700: "#814D23",
    600: "#A16232",
    500: "#C28153",
    400: "#D9A37A",
    300: "#EAC7AA",
    200: "#F4E1D2",
    100: "#FDF7F2",
  },
  gray: {
    900: "#1F2937",
    800: "#374151",
    700: "#4B5563",
    600: "#6B7280",
    500: "#9CA3AF",
    400: "#D1D5DB",
    300: "#E5E7EB",
    200: "#F3F4F6",
    100: "#F9FAFB",
  },
  red: {
    900: "#c2172b",
  },
  etc: {
    black: "#000000",
    white: "#ffffff",
  },
};
/* Media Query */
const mediaQueryMap = {
  mobile: "375px",
  tablet: "600px",
  desktop: "1024px"
};
/* Layout */
const layoutMap = {
  minWidth: "320px",
  headerHeight: "60px",
  footerHeight: "40px",
  sidebarWidth: "280px",
  padding: "20px 30px",
};
/* Z-Index */
const zindexMap = {
  header: "1000",
};
/* Border Radius */
const radiusMap = {
  full: "100%",
  xl: "100px",
  lg: "20px",
  md: "6px",
  sm: "4px",
  xs: "2px"
};
/* Form Height */
const formHeightMap = {
  xl: "52px",
  lg: "48px",
  md: "40px",
  sm: "36px",
  xs: "32px",
  xxs: "28px"
};
const toKebabCase = (str: string) => 
  str.replace(/([A-Z])/g, "-$1").toLowerCase();

const ThemeFont = (fonts: Record<string, string>) => {
  return Object.entries(fonts)
    .map(([key, value]) => `--font-size-${key}: ${value};`)
    .join("\n");
};
const ThemeColor = (colors: Record<string, Record<string, string>>) => {
  return Object.entries(colors)
    .flatMap(([category, shades]) =>
      Object.entries(shades).map(([key, value]) => {
        if (category === "etc") {
          return `--color-${key}: ${value};`;
        }
        return `--color-${category}-${key}: ${value};`;
      })
    )
    .join("\n");
};
const ThemeBreakPoint = (sizes: Record<string, string>) => {
  return Object.entries(sizes)
    .map(([key, value]) => `--breakpoint-${key}: ${value};`)
    .join("\n");
};

const ThemeLayout = (data: Record<string, string>) => {
  return Object.entries(data)
    .map(([key, value]) => `--layout-${toKebabCase(key)}: ${value};`)
    .join("\n");
};
const ThemeZindex = (indexs: Record<string, string>) => {
  return Object.entries(indexs)
    .map(([key, value]) => `--z-index-${key}: ${value};`)
    .join("\n");
};
const ThemeRadius = (radius: Record<string, string>) => {
  return Object.entries(radius)
    .map(([key, value]) => `--radius-${key}: ${value};`)
    .join("\n");
};
const ThemeFormHeight = (height: Record<string, string>) => {
  return Object.entries(height)
    .map(([key, value]) => `--form-height-${key}: ${value};`)
    .join("\n");
};

/* ===== Variables ===== */
export const Variables = () => css`
  :root {
    ${ThemeFont(fontSizeMap)};
    ${ThemeColor(colorMap)}
    ${ThemeBreakPoint(mediaQueryMap)};
    ${ThemeZindex(zindexMap)};
    ${ThemeRadius(radiusMap)};
    ${ThemeFormHeight(formHeightMap)};
    ${ThemeLayout(layoutMap)};
    --transition: all 150ms ease;
    --font-noto: 'Noto Sans KR', 'Pretendard Variable', 'Pretendard', -apple-system, BlinkMacSystemFont, system-ui,
      Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif;
    --font-pretendard: 'Pretendard', 'Pretendard Variable', 'Noto Sans KR', -apple-system, BlinkMacSystemFont, system-ui,
      Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif;
  }
`;