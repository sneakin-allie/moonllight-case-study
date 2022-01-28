import styled from "styled-components";

export const StyledSteps = styled.section`
    display: grid;
    grid-template-columns: repeat(16, 1fr);
    grid-column-gap: 1.5rem;

    header {
        grid-column-start: 4;
        grid-column-end: 6;
    }

    div {
        grid-column-start: 9;
        grid-column-end: 14;
    }

    h5 {
        background-color: ${({ theme }) => theme.colors.palemint};
        width: 4.5rem;
        height: 4.5rem;
        text-align: center;
        line-height: 4.5rem;
    }

    h5, h3 {
        margin: 0;
    }

    h1 {
        margin-top: 1.5rem;
    }

    p {
        font-family: 'IBM Plex Serif';
        font-size: 1.5em;
        line-height: 2em;
        margin-top: 1rem;
        margin-bottom: 4.5rem;
    }

`