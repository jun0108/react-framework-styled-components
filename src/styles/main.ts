import { createGlobalStyle } from "styled-components"
import {Resets} from "./base/Resets"
import {Fonts} from "./base/Fonts"
import {Variables} from "./helpers/Variables"
import {Wrapper} from "./layout/Wrapper"
import {Popups} from "./components/Popups"
import {Buttons} from "./components/Buttons"
import {Chips} from "./components/Chips"

const GlobalStyles = createGlobalStyle`
/* base */
${Resets}
${Fonts}
/* variable */
${Variables}
/* layout */
${Wrapper}
/* components */
${Buttons}
${Popups}
${Chips}
`

export { GlobalStyles } 