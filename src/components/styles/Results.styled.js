import styled from "styled-components";

export const StyledResults = styled.section`
    display: grid;
    grid-template-columns: repeat(16, 1fr);
    grid-column-gap: 1.5rem;
    margin-bottom: 9rem;

    h1 {
        grid-column-start: 6;
        grid-column-end: 10;
        margin: 0 0 2.625rem 0;
    }

    h2 {
        grid-column-start: 6;
        grid-column-end: 14;
        margin: 0;
    }

    div {
        grid-column-start: 6;
        grid-column-end: 17;
        border-bottom: 2px solid;
        border-color: ${({ theme }) => theme.colors.silver};
        padding-bottom: 13.5rem;
    }

`;