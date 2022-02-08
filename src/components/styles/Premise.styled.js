import styled from "styled-components";

export const StyledPremise = styled.section`
    color: ${({ theme }) => theme.colors.darkgreen};
    display: grid;
    grid-template-columns: repeat(16, 1fr);
    grid-column-gap: 1.5rem;

    @media (max-width: 1040px) {
        margin-top: 4.5rem;
    }

    @media (max-width: 800px) {
        margin-top: 13.5rem;
    }

    @media (max-width: 560px) {
        margin-top: 18rem;
    }
`

export const StyledTitle = styled.div`
    font-family: "Space Grotesk";
    font-weight: bold;
    font-size: 5.625em;
    color: ${({ theme }) => theme.colors.darkgreen};
    grid-column-start: 4;
    grid-column-end: 13;
    margin-bottom: 1.125rem;

    p {
        margin: 0;

        @media (max-width: 1040px) {
            font-size: 4rem;
        }

        @media (max-width: 800px) {
            font-size: 3rem;
        }
    }
`

export const StyledBody = styled.div`
    font-family: "IBM Plex Serif";
    font-weight: normal;
    font-size: 1.875em;
    color: ${({ theme }) => theme.colors.gunmetalgray};
    line-height: 1.6em;
    grid-column-start: 4;
    grid-column-end: 13;

    @media (max-width: 1280px) {
        grid-column-end: 14;
    }

    @media (max-width: 1040px) {
        grid-column-end: 15;
    }
`