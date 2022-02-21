import styled from "styled-components";

export const StyledSteps = styled.section`
    display: grid;
    grid-template-columns: repeat(16, 1fr);
    grid-column-gap: 1.5rem;
    margin: 13.5rem 4.5rem;

    @media (max-width: 1040px) {
        margin: 9rem 4.5rem;
    }

    @media (max-width: 800px) {
        margin: 9rem 2.5rem;
    }

    @media (max-width: 560px) {
        grid-column-gap: 0;
    }
`

export const StyledNum = styled.div`
    grid-column-start: 4;
    grid-column-end: 7;

    @media (max-width: 1280px) {
        grid-column-start: 3;
    }

    @media (max-width: 1040px) {
        grid-column-start: 2;
        grid-column-end: 16;
    }

    @media (max-width: 800px) {
        grid-column-start: 1;
        grid-column-end: 17;
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

        @media (max-width: 800px) {
            font-size: 3em;
            line-height: 4.25rem;
        }

        @media (max-width: 560px) {
            font-size: 2.5em;
            line-height: 3rem;
        }
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
        grid-column-start: 2;
        grid-column-end: 16;
    }

    @media (max-width: 800px) {
        grid-column-start: 1;
        grid-column-end: 17;
    }

    h3 {
        color: ${({ theme }) => theme.colors.darkgreen};
        margin: 0 0 1rem 0;

        @media (max-width: 800px) {
            font-size: 2em;
            line-height: 2.5rem;
        }
    }

    p {
        color: ${({ theme }) => theme.colors.gunmetalgray};
        font-family: 'IBM Plex Serif';
        font-size: 1.5em;
        line-height: 1.75em;
        margin: 0 0 4.5rem 0;
    }

    p:last-child {
        margin: 0;
    }
`