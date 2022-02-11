import styled from "styled-components";

export const StyledResults = styled.section`
    display: grid;
    grid-template-columns: repeat(16, 1fr);
    grid-column-gap: 1.5rem;
    margin-bottom: 9rem;

    @media (max-width: 1280px) {
        grid-column-gap: 0;
    }

    h1 {
        grid-column-start: 6;
        grid-column-end: 15;
        margin: 0 0 2.625rem 0;

        @media (max-width: 1280px) {
            grid-column-start: 5;
        }

        @media (max-width: 1040px) {
            grid-column-start: 4;
        }

        @media (max-width: 800px) {
            font-size: 3.5em;
        }

        @media (max-width: 560px) {
            font-size: 3.25em;
        }
    }

    h2 {
        grid-column-start: 6;
        grid-column-end: 15;
        line-height: 4.25rem;
        margin: 0;

        @media (max-width: 1280px) {
            grid-column-start: 5;
        }

        @media (max-width: 1040px) {
            grid-column-start: 4;
        }

        @media (max-width: 800px) {
            font-size: 2.75em;
        }

        @media (max-width: 560px) {
            font-size: 2.5em;
        }
    }

    div {
        border-bottom: 2px solid;
        border-color: ${({ theme }) => theme.colors.silver};
        grid-column-start: 6;
        grid-column-end: 17;
        margin-bottom: 9rem;
        padding-bottom: 13.5rem;

        @media (max-width: 1280px) {
            grid-column-start: 5;
            padding-bottom: 9rem;
        }

        @media (max-width: 1040px) {
            grid-column-start: 4;
            margin-bottom: 4.5rem;
            padding-bottom: 4.5rem;
        }
    }

`;