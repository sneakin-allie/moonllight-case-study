import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

    html, body {
        margin: 0;
        padding: 0;
        width: 100vw;
    }

    h1 {
        font-family: 'Space Grotesk';
        font-weight: bold;
        font-size: 3.75em;

        @media (max-width: 1280px) {
            font-size: 3.5em;
        }

        @media (max-width: 1040px) {
            font-size: 3.25em;
        }

        @media (max-width: 800px) {
            font-size: 3em;
        }
    }

    h2 {
        font-family: 'Space Grotesk';
        font-weight: normal;
        font-size: 3em;

        @media (max-width: 1280px) {
            font-size: 2.75em;
        }

        @media (max-width: 1040px) {
            font-size: 2.5em;
        }

        @media (max-width: 800px) {
            font-size: 2em;
        }
    }

    h3 {
        font-family: 'Space Grotesk';
        font-weight: bold;
        font-size: 2.5em;

        @media (max-width: 1280px) {
            font-size: 2.25em;
        }

        @media (max-width: 1040px) {
            font-size: 2em;
        }

        @media (max-width: 800px) {
            font-size: 1.75em;
        }
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

    img {
        width: 100%;
    }

`;

export default GlobalStyles;