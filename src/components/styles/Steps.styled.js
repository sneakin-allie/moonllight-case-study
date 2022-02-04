import styled from "styled-components";

export const StyledSteps = styled.section`
    display: grid;
    grid-template-columns: repeat(16, 1fr);
    grid-column-gap: 1.5rem;
`

export const StyledNum = styled.div`
    grid-column-start: 4;
    grid-column-end: 6;

    h5 {
        background-color: ${({ theme }) => theme.colors.palemint};
        color: ${({ theme }) => theme.colors.darkgreen};
        height: 4.5rem;
        line-height: 4.5rem;
        margin: 0;
        text-align: center;
        width: 4.5rem;
    }

    h1 {
        color: ${({ theme }) => theme.colors.darkgreen};
        margin-top: 1.5rem;
    }
`

export const StyledContent = styled.div`
    grid-column-start: 9;
    grid-column-end: 14;

    h3 {
        color: ${({ theme }) => theme.colors.darkgreen};
        margin: 0;
    }

    p {
        color: ${({ theme }) => theme.colors.gunmetalgray};
        font-family: 'IBM Plex Serif';
        font-size: 1.5em;
        line-height: 2em;
        margin-top: 1rem;
        margin-bottom: 4.5rem;
    }
`