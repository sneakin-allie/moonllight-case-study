import styled from "styled-components";

export const StyledPremise = styled.section`
    color: ${({ theme }) => theme.colors.darkgreen};
    display: grid;
    grid-template-columns: repeat(16, 1fr);
    grid-column-gap: 1.5rem;
    margin: 9rem 4.5rem 0 4.5rem;
`

export const StyledTitle = styled.div`
    font-family: "Space Grotesk";
    font-weight: bold;
    font-size: 5.625em;
    color: ${({ theme }) => theme.colors.darkgreen};
    grid-column-start: 4;
    grid-column-end: 13;
    margin-bottom: 1.125rem;

    @media (max-width: 800px) {
        grid-column-start: 1;
        grid-column-end: 16;
    }

    p {
        margin: 0;

        @media (max-width: 800px) {
            font-size: 3.75rem;
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

    @media (max-width: 800px) {
        grid-column-start: 1;
        grid-column-end: 17;
    }
`