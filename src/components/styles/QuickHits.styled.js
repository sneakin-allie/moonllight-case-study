import styled from "styled-components";

export const StyledQuickHits = styled.section`
    display: grid;
    grid-template-columns: repeat(16, 1fr);
    grid-column-gap: 1.5rem;
    margin-bottom: 13.5rem;
`             

export const StyledPara = styled.div`
    grid-column-start: 1;
    grid-column-end: 11;

    @media (max-width: 1040px) {
        grid-column-start: 1;
        grid-column-end: 16;
    }

    h2 {
        color: ${({ theme }) => theme.colors.darkgreen};
        margin: 0;
        border-bottom: 2px solid ${({ theme }) => theme.colors.silver};
        padding: 0 0 13.5rem 19.5rem;
        line-height: 4.25rem;

        @media (max-width: 1040px) {
            padding: 0 0 13.5rem 7rem;
        }
    }
`

export const StyledList = styled.div`
    grid-column-start: 12;
    grid-column-end: 16;

    @media (max-width: 1040px) {
        grid-column-start: 4;
        grid-column-end: 15;
    }

    h3 {
        color: ${({ theme }) => theme.colors.darkgreen};
        margin: 0 0 2.5rem 0;
    }

    ol {
        font-family: "Space Grotesk";
        font-weight: normal;
        padding: 0;
        margin: 0;
        list-style-type: none;
        counter-reset: count;
    }

    ul {
        list-style-type: none;
        font-family: "IBM Plex Serif";
        color: ${({ theme }) => theme.colors.gunmetalgray};
        line-height: 2.5rem;
        padding: 0 0 3rem 0;

        li:first-child::before {
            counter-increment: count;
            content: counter(count, decimal-leading-zero);
            font-family: "Space Grotesk";
            color: ${({ theme }) => theme.colors.darkgreen};
            padding-right: 4.5rem;

        }

        li:first-child {
            font-weight: bold;
            font-size: 1.875em;
        }

        li:nth-child(1n + 2) {
            font-weight: normal;
            font-size: 1.5em;
            padding-left: 6.8rem;
        }
    }
`