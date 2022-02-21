import styled from "styled-components";

export const StyledPremise = styled.section`
    color: ${({ theme }) => theme.colors.darkgreen};
    display: grid;
    grid-template-columns: repeat(16, 1fr);
    grid-column-gap: 1.5rem;
    margin: 9rem 4.5rem 0 4.5rem;

    @media (max-width: 800px) {
        margin: 9rem 2.5rem 0 2.5rem;
    }

    @media (max-width: 560px) {
        grid-column-gap: 0;
        margin: 9rem 2.5rem 0 2.5rem;
    }
`

export const StyledTitle = styled.div`
    grid-column-start: 4;
    grid-column-end: 13;

    @media (max-width: 1040px) {
        grid-column-start: 2;
        grid-column-end: 16;
    }

    @media (max-width: 1040px) {
        grid-column-start: 2;
        grid-column-end: 16;
    }

    @media (max-width: 800px) {
        grid-column-start: 1;
        grid-column-end: 16;
    }

    p {
        font-family: "Space Grotesk";
        font-weight: bold;
        font-size: 5.625em;
        color: ${({ theme }) => theme.colors.darkgreen};
        margin: 0;
        padding: 0;

        @media (max-width: 1280px) {
            font-size: 5em;
        }

        @media (max-width: 1040px) {
            font-size: 3.75em;
        }

        @media (max-width: 800px) {
            font-size: 3em;
        }

        @media (max-width: 560px) {
            font-size: 2em;
        }

    }
`

export const StyledBody = styled.div`
    grid-column-start: 4;
    grid-column-end: 13;
    color: ${({ theme }) => theme.colors.gunmetalgray};
    font-family: "IBM Plex Serif";
    font-weight: normal;
    font-size: 1.875em;
    line-height: 3rem;

    @media (max-width: 1040px) {
        grid-column-start: 2;
        grid-column-end: 16;
    }

    @media (max-width: 800px) {
        font-size: 1.5em;
        grid-column-start: 1;
    }

    @media (max-width: 560px) {
        font-size: 1em;
        line-height: 1.875rem;
        grid-column-start: 1;
    }
`