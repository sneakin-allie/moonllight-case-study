import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

    * {
        box-sizing: border-box;
    }

    html, body {
        padding: 0;
        margin: 0;
    }

    h1 {
        font-family: 'Space Grotesk';
        font-weight: bold;
        font-size: 3.75em;
    }

    h2 {
        font-family: 'Space Grotesk';
        font-weight: normal;
        font-size: 3em;
    }

    h3 {
        font-family: 'Space Grotesk';
        font-weight: bold;
        font-size: 2.5em;
    }

    h4 {
        font-family: 'IBM Plex Serif';
        font-weight: bold;
        font-size: 1.875em;
    }

    h5 {
        font-family: 'Space Grotesk';
        font-weight: normal;
        font-size: 1.5em;
    }

    h6 {
        font-family: 'Space Grotesk';
        font-weight: normal;
        font-size: 1em;
    }

`;

export default GlobalStyles;