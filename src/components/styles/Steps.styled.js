import styled from "styled-components";

export const StyledSteps = styled.section`
    display: grid;
    grid-template-columns: repeat(16, 1fr);
    grid-column-gap: 1.5rem;
    margin: 13.5rem 4.5rem;
    padding: 0;

    @media (max-width: 1040px) {
        margin: 4.5rem;
    }
`

export const StyledNum = styled.div`
    grid-column-start: 4;
    grid-column-end: 6;

    @media (max-width: 1280px) {
        grid-column-start: 3;
    }

    @media (max-width: 1040px) {
        grid-column-start: 1;
        grid-column-end: 16;
    }

    h5 { // Number
        background-color: ${({ theme }) => theme.colors.palemint};
        color: ${({ theme }) => theme.colors.darkgreen};
        height: 4.5rem;
        line-height: 4.5rem;
        margin: 0;
        text-align: center;
        width: 4.5rem;
    }

    h1 { // Section title
        color: ${({ theme }) => theme.colors.darkgreen};
        margin: 1.5rem 0 4.5rem 0;

        /*
        @media (max-width: 1280px) {
            font-size: 3.5em;
        }
        */
    }
`

export const StyledContent = styled.div`
    grid-column-start: 9;
    grid-column-end: 14;

    @media (max-width: 1280px) {
        grid-column-start: 8;
        grid-column-end: 15;
    }

    @media (max-width: 1040px) {
        grid-column-start: 1;
        grid-column-end: 17;
    }

    @media (max-width: 800px) {
        grid-column-start: 3;
        grid-column-end: 15;
    }

    h3 {
        color: ${({ theme }) => theme.colors.darkgreen};
        margin: 0 0 1rem 0;
    }

    p {
        color: ${({ theme }) => theme.colors.gunmetalgray};
        font-family: 'IBM Plex Serif';
        font-size: 1.5em;
        line-height: 1.75em;
        margin: 0 0 4.5rem 0;
    }
`