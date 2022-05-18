import { createGlobalStyle } from "styled-components";

import theme from "../src/theme";

export const GlobalStyles = createGlobalStyle `


* {
    padding: 0;
    margin: 0;
}

body {
    font-family: "Roboto",sans-serif;
    color: ${props => props.theme.black};
}

a {
    color: ${props => props.theme.primary};
    text-decoration: none;
    font-weight: bold;
    transition: 0.5s;
}

a:hover {
    color: ${props => props.theme.primaryHover};
    
}
`