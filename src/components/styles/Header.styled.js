import styled from "styled-components";

export const StyledHeader = styled.header`
    display: grid;
    grid-template-columns: repeat(16, 1fr);
    grid-column-gap: 1.5rem;
    background-color: ${({ theme }) => theme.colors.darkgreen};
    border: none;
    padding-top: 12.5rem;
    padding-bottom: 25rem;

    h5 { // CASE STUDY
        color: ${({ theme }) => theme.colors.slategray};
        letter-spacing: 0.25em;
        grid-column-start: 3;
        grid-column-end: 5;
        margin: 0;
    }

    svg {
        grid-column-start: 5;
        grid-column-end: 15;
        margin: auto;
    }

    p { // Moonllight
        font-family: "Space Grotesk";
        font-weight: lighter;
        font-size: 10em;
        color: ${({ theme }) => theme.colors.slategray};
        grid-column-start: 3;
        grid-column-end: 11;
        padding: 4.5rem 0 3.125rem 0;
        margin: 0;
    }

    div {
        grid-column-start: 5;
        grid-column-end: 13;
    }

    div > p { // rest of text
        font-family: "IBM Plex Serif";
        font-weight: normal;
        font-size: 1.875em;
        color: ${({ theme }) => theme.colors.palemint};
        line-height: 1.5em;
    }

    img { // hero image
        width: 100%;
        grid-column-start: 2;
        grid-column-end: 16;
    }

`;