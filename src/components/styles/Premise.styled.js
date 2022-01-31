import styled from "styled-components";

export const StyledPremise = styled.section`
    color: ${({ theme }) => theme.colors.darkgreen};
    display: grid;
    grid-template-columns: repeat(16, 1fr);
    grid-column-gap: 1.5rem;

    header {
        font-family: "Space Grotesk";
        font-weight: bold;
        font-size: 5.625em;
        color: ${({ theme }) => theme.colors.darkgreen};
        grid-column-start: 4;
        grid-column-end: 9;
        margin-bottom: 2rem;
    }

    p {
        font-family: "IBM Plex Serif";
        font-weight: normal;
        font-size: 1.875em;
        color: ${({ theme }) => theme.colors.gunmetalgray};
        line-height: 1.6em;
        grid-column-start: 4;
        grid-column-end: 13;
    }

`