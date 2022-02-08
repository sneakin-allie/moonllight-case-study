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

    @media (max-width: 1620px) {
        grid-column-end: 10;
    }

    @media (max-width: 1290px) {
        grid-column-end: 9;
    }

    @media (max-width: 1070px) {
        grid-column-end: 8;
    }

    @media (max-width: 1040px) {
        grid-column-end: 14;
    }

    h2 {
        color: ${({ theme }) => theme.colors.darkgreen};
        margin: 0;
        border-bottom: 2px solid ${({ theme }) => theme.colors.silver};
        padding: 0 0 13.5rem 19.5rem;
        line-height: 4.25rem;

        @media (max-width: 1620px) {
            padding: 0 0 9rem 15rem;
        }

        @media (max-width: 1290px) {
            font-size: 2.5em;
            line-height: 4rem;
            padding: 0 0 4.5rem 10.5rem;
        }

        @media (max-width: 1070px) {
            padding: 0 0 2.25rem 5.25rem;
        }
    }
`

export const StyledList = styled.div`
    grid-column-start: 12;
    grid-column-end: 16;

    @media (max-width: 1620px) {
        grid-column-start: 11;
    }

    @media (max-width: 1290px) {
        grid-column-start: 10;
    }

    @media (max-width: 1070px) {
        grid-column-start: 9;
    }

    @media (max-width: 1040px) {
        grid-column-start: 4;
        grid-column-end: 16;
        margin-top: 5.25rem;
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