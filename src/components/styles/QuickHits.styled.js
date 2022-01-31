import styled from "styled-components";

export const StyledQuickHits = styled.section`
    display: grid;
    grid-template-columns: repeat(16, 1fr);
    grid-column-gap: 1.5rem;
    margin-bottom: 13.5rem;

    h2 { // The start of the...
        grid-column-start: 3;
        grid-column-end: 11;
        color: ${({ theme }) => theme.colors.darkgreen};
        margin: 0;
    }

    svg {
        grid-column-start: 1;
        grid-column-end: 11;
        margin-top: -13.5rem;
    }

    h3 { // Our Quick Hits
        color: ${({ theme }) => theme.colors.darkgreen};
        margin: 0 0 3rem 0;
    }

    ol {
        font-family: "Space Grotesk";
        font-weight: normal;
        grid-column-start: 12;
        grid-column-end: 16;
        padding: 0;
        margin: 0;
    }

    span { // Product Discovery, Experience Design, Development
        font-family: "IBM Plex Serif";
        font-weight: bold;
        font-size: 1.875em;
        color: ${({ theme }) => theme.colors.gunmetalgray};
        line-height: 2em;
        margin: 0;
    }

    ul {
        list-style-type: none;
    }

    ul > li { // rest of list items
        font-family: "IBM Plex Serif";
        font-weight: normal;
        font-size: 1.5em;
        color: ${({ theme }) => theme.colors.gunmetalgray};
        line-height: 2em;
        padding: none;
        margin: 0;
    }

`             