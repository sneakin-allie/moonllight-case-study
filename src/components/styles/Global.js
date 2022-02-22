import { createGlobalStyle } from "styled-components";
import { normalize } from 'styled-normalize';

const GlobalStyles = createGlobalStyle`
    ${normalize}

    html, body {
        margin: 0;
        padding: 0;
        width: 100vw;
    }

    html {
        font-size: 16px;
    }

    h1 {
        font-family: 'Space Grotesk';
        font-size: 3.75em;
        font-weight: bold;
        line-height: 4.5rem;
    }

    h2 {
        font-family: 'Space Grotesk';
        font-size: 3em;
        font-weight: normal;
        line-height: 4.25rem;
    }

    h3 {
        font-family: 'Space Grotesk';
        font-size: 2.5em;
        font-weight: bold;
        line-height: 3rem;
    }

    h4 {
        font-family: 'IBM Plex Serif';
        font-size: 1.875em;
        font-weight: bold;
        line-height: 2.5rem;
    }

    h5 {
        font-family: 'Space Grotesk';
        font-size: 1.5em;
        font-weight: normal;
        letter-spacing: 0.25;
        line-height: 2.25rem;
    }

    h6 {
        font-family: 'Space Grotesk';
        font-size: 1em;
        font-weight: normal;
        letter-spacing: 0.25;
        line-height: 1.275rem;
    }

    img {
        width: 100%;
    }

    a {
        transition: all 1s ease-out;
        :hover, :focus {
            color: ${({ theme }) => theme.colors.limegreen};
            font-size: 1.5em;
            text-decoration-line: underline;
        }
    }

`;

export default GlobalStyles;