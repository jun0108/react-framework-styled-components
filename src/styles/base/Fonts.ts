import { css } from "styled-components";

export const Fonts = () => css`
  @font-face {
    font-family: "Noto Sans KR";
    src:
      url("/font/NotoSansKR-Regular.otf") format("opentype"),
      url("/font/NotoSansKR-Regular.woff") format("woff"),
      url("/font/NotoSansKR-Regular.woff2") format("woff2");
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: "Noto Sans KR";
    src:
      url("/font/NotoSansKR-Medium.otf") format("opentype"),
      url("/font/NotoSansKR-Medium.woff") format("woff"),
      url("/font/NotoSansKR-Medium.woff2") format("woff2");
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: "Noto Sans KR";
    src:
      url("/font/NotoSansKR-Bold.otf") format("opentype"),
      url("/font/NotoSansKR-Bold.woff") format("woff"),
      url("/font/NotoSansKR-Bold.woff2") format("woff2");
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: "Pretendard Variable";
    font-weight: 45 920;
    font-style: normal;
    font-display: swap;
    src:
      local("Pretendard Variable"),
      url("/font/PretendardVariable.woff2") format("woff2-variations");
  }
  @font-face {
    font-family: "Pretendard";
    src: url("/font/Pretendard-Thin.woff") format("woff");
    font-weight: 100;
    font-display: swap;
  }
  @font-face {
    font-family: "Pretendard";
    src: url("/font/Pretendard-ExtraLight.woff") format("woff");
    font-weight: 200;
    font-display: swap;
  }
  @font-face {
    font-family: "Pretendard";
    src: url("/font/Pretendard-Light.woff") format("woff");
    font-weight: 300;
    font-display: swap;
  }
  @font-face {
    font-family: "Pretendard";
    src: url("/font/Pretendard-Regular.woff") format("woff");
    font-weight: 400;
    font-display: swap;
  }
  @font-face {
    font-family: "Pretendard";
    src: url("/font/Pretendard-Medium.woff") format("woff");
    font-weight: 500;
    font-display: swap;
  }
  @font-face {
    font-family: "Pretendard";
    src: url("/font/Pretendard-SemiBold.woff") format("woff");
    font-weight: 600;
    font-display: swap;
  }
  @font-face {
    font-family: "Pretendard";
    src: url("/font/Pretendard-Bold.woff") format("woff");
    font-weight: 700;
    font-display: swap;
  }
  @font-face {
    font-family: "Pretendard";
    src: url("/font/Pretendard-ExtraBold.woff") format("woff");
    font-weight: 800;
    font-display: swap;
  }
  @font-face {
    font-family: "Pretendard";
    src: url("/font/Pretendard-Black.woff") format("woff");
    font-weight: 900;
    font-display: swap;
  }
`;