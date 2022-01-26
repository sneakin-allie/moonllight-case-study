import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    // import for both fonts: @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Serif:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Space+Grotesk:wght@300;400;500;600;700&display=swap');

    @font-face {
        font-family: 'IBM Plex Serif', serif;
        src: url('https://fonts.googleapis.com/css2?family=IBM+Plex+Serif:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap');
    }

    @font-face {
        font-family: 'Space Grotesk', sans-serif;
        src: url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap');
    }

    body {
        margin: 0;
        font-family: 'IBM Plex Serif', serif;
        font-family: 'Space Grotesk, sans-serif';
    };

`;

export default GlobalStyles;