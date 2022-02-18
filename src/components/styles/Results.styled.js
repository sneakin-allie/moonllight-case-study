import styled from "styled-components";

export const StyledResults = styled.section`
    display: grid;
    grid-template-columns: repeat(16, 1fr);
    grid-column-gap: 1.5rem;
    margin: 13.5rem 0 18rem 0;

    @media (max-width: 1280px) {
        margin: 9rem 0 18rem 0;
    }

    @media (max-width: 800px) {
        margin: 9rem 0;
    }

    @media (max-width: 560px) {
        grid-column-gap: 0;
        margin: 4.5rem 0 9rem 0;
    }

    h1 {
        grid-column-start: 6;
        grid-column-end: 15;
        margin: 0 0 2.625rem 0;

        /*
        @media (max-width: 1280px) {
            grid-column-start: 5;
        }
        */

        @media (max-width: 1040px) {
            font-size: 3em;
            line-height: 4.25rem;
            grid-column-start: 3;
        }

        @media (max-width: 800px) {
            font-size: 3em;
            grid-column-start: 4;
        }
    }

    h2 {
        border-bottom: 2px solid;
        border-color: ${({ theme }) => theme.colors.silver};
        grid-column-start: 6;
        grid-column-end: 17;
        line-height: 4.25rem;
        margin: 0;
        padding: 0 19.5rem 13.5rem 0;

        /*
        @media (max-width: 1280px) {
            grid-column-start: 5;
        }
        */

        @media (max-width: 1040px) {
            font-size: 2.5em;
            grid-column-start: 3;
            grid-column-end: 17;
            padding: 0 4.5rem 4.5rem 0;
        }

        @media (max-width: 800px) {
            font-size: 2em;
            grid-column-start: 4;
            line-height: 3rem;
        }
    }
`;