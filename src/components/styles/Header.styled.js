import styled from "styled-components";

export const StyledHeader = styled.header`
    display: grid;
    grid-template-columns: repeat(16, 1fr);
    grid-column-gap: 1.5rem;
    background-color: ${({ theme }) => theme.colors.darkgreen};
    border: none;
    padding-top: 12.5rem;

    div { // CASE STUDY & MOONLLIGHT
        grid-column-start: 3;
        grid-column-end: 5;
    }

    div > p {
        font-family: "Space Grotesk";
        font-weight: lighter;
        font-size: 10em;
        color: ${({ theme }) => theme.colors.slategray};
    }

    h5 { // CASE STUDY
        color: ${({ theme }) => theme.colors.slategray};
        letter-spacing: 0.25em;
        margin: 0;
    }

    p {
        grid-column-start: 5;
        grid-column-end: 14;
        font-family: "IBM Plex Serif";
        font-weight: normal;
        font-size: 1.875em;
        color: ${({ theme }) => theme.colors.palemint};
        margin: 0;
    }

`;