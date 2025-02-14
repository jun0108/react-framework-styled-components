import { createGlobalStyle } from "styled-components";
import {Reset} from "./base/Resets";
import {Fonts} from "./base/Fonts";
import {Variables} from "./helpers/Variables";
import {Wrapper} from "./layout/Wrapper";
import {Buttons} from "./components/Buttons";
import {Chips} from "./components/Chips";

const GlobalStyles = createGlobalStyle`
/* base */
${Reset}
${Fonts}
/* variable */
${Variables}
/* layout */
${Wrapper}
/* components */
${Buttons}
${Chips}
`;

export { GlobalStyles }; 