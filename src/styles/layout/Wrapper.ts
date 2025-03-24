import styled from 'styled-components'
import { css } from "styled-components"
import {space, typo} from "~/styles/helpers/mixins/index"

export const Wrapper = () => css`
html {
  overflow: hidden;
  scroll-behavior: smooth;
  -webkit-text-size-adjust: 100%;
}
body {
  ${typo({ fontFamily: 'var(--font-noto)'})}
  overflow-x: hidden;
  overflow-y: overlay;
  overflow-wrap: break-word;
  -webkit-font-smoothing: antialiased;
  word-break: keep-all;
  box-sizing: border-box;
}
html,
body,
#root {
  width: 100%;
  height: 100%;
}
.hide {
  overflow: hidden;
  display: inline-block;
  position: relative;
  z-index: -1;
  border: 0;
  width: 1px;
  height: 1px;
  clip: rect(1px, 1px, 1px, 1px);
  clip-path: inset(50%);
}

::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}
::-webkit-scrollbar-track {
  background-color: transparent;
}
::-webkit-scrollbar-thumb {
  background-color: var(--color-gray-600);
  border-radius: var(--radius-sm);
}
::-webkit-scrollbar-corner {
  background-color: var(--color-gray-10);
}
::-webkit-scrollbar-button {
  display: none;
}
`
export const Layout = styled.main`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin: 0 auto;
`
export const LayoutContent = styled.div`
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  flex: 1 1 0%;
  max-height: calc(100% -  var(--layout-header-height));
  padding: var(--layout-padding);
  background-color: var(--color-secondary-200);
`
export const PageTitle = styled.h1`
  ${typo({size:"var(--font-size-22)", weight: 500})};
  margin-bottom: 10px;
`
export const PageSubTitle = styled.h2`
  ${typo({size:"var(--font-size-18)", weight: 500, color:"var(--color-gray-800)"})};
  margin-bottom: 10px;
`
export const SearchForm = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: var(--color-white);
  padding: 0 20px 12px 20px;
  border: 1px solid var(--color-gray-400);
  border-radius: var(--radius-md);
  margin-bottom: 20px;
`
export const SearchFormForm = styled.form`
  ${space({x:'8px'})};
  display: flex;
  flex: 1 1 0%;
  margin: 12px 12px 0 0;
`
export const SearchFormButton = styled.div`
  ${space({x:'8px'})};
  display: flex;
  margin-top: 12px;
`
export const Form = styled.form`
  ${space({y:'6px'})};
  display: flex;
  flex-direction: column;
  background-color: var(--color-white);
  padding: 12px 20px;
  border: 1px solid var(--color-gray-400);
  border-radius: var(--radius-md);
  margin-bottom: 20px;
`
export const FormItem = styled.div`
  ${space({x:'8px'})};
  display: flex;
  padding: 8px 0;
  border-top: 1px solid var(--color-gray-400);
  &:first-child {
    border-top: 0;
  }
`
export const FormButton = styled.div`
  ${space({x:'8px'})};
  display: flex;
  justify-content: flex-end;
`