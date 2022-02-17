import styled from "styled-components";

export const StyledProjectGoalsImages = styled.section`
    display: grid;
    grid-template-columns: repeat(16, 1fr);
    grid-column-gap: 1.5rem;
    padding: 0;
    margin: 9rem 4.5rem 0 4.5rem;

    @media (max-width: 1040px) {
        grid-column-start: 3;
        grid-column-end: 15; 
        padding-bottom: 4.5rem;
    }
`
export const StyledImageOne = styled.div`
    grid-column-start: 2;
    grid-column-end: 8; 

    @media (max-width: 1040px) {
        grid-column-start: 1;
        grid-column-end: 9; 
    }
`

export const StyledImageTwo = styled.div`
    grid-column-start: 9;
    grid-column-end: 17;
    margin-top: 7rem;

    @media (max-width: 1040px) {
        margin-top: 0; 
    }

`