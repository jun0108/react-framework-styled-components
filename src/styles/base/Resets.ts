import { css } from "styled-components"

export const Resets = () => css`
  *,
  :after,
  :before {
    box-sizing: border-box;
  }

  html,
  body,
  div,
  span,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  pre,
  a,
  em,
  img,
  ul,
  li,
  label,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  footer,
  header,
  menu,
  nav,
  section {
    padding: 0;
    margin: 0;
    border: 0;
    font: inherit;
    font-size: 100%;
    vertical-align: baseline;
  }

  article,
  aside,
  footer,
  header,
  menu,
  nav,
  section {
    display: block;
  }

  ol,
  ul {
    list-style: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  img {
    display: block;
    border: 0;
    user-select: none;
  }

  button,
  input,
  select,
  textarea {
    margin: 0;
    padding: 0;
    background-color: transparent;
    border-radius: 0;
    border: 0;
    box-sizing: border-box;
    box-shadow: none;
    -webkit-box-sizing: border-box;
    font: inherit;
    font-family: inherit;
    color: inherit;

    &:focus {
      outline: none;
    }
    &:disabled {
      cursor: not-allowed;
    }
  }

  em {
    font-style: normal;
  }

  button {
    border: 0;
    overflow: visible;
    cursor: pointer;

    &:disabled {
      cursor: not-allowed;
    }
  }

  button,
  select {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    -o-appearance: none;
    text-transform: none;
  }

  textarea {
    overflow: auto;
  }

  input {
    line-height: normal;
    border: 0;

    &[type='checkbox'],
    &[type='radio'] {
      appearance: none;
      -webkit-appearance: none;
      -moz-appearance: none;
      -o-appearance: none;
      box-sizing: border-box;
      padding: 0;
    }

    &[type='number'] {
      &::-webkit-inner-spin-button,
      &::-webkit-outer-spin-button {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
      }
    }

    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
        transition: background-color 0s 600000s, color 0s 600000s !important;
    }
  }

  a {
    cursor: pointer;
    text-decoration: none;
  }
`