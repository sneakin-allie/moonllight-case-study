import styled from "styled-components";

export const StyledProjectGoalsImages = styled.section`
    display: flex;

    @media (max-width: 1040px) {
        margin: 0 4.5rem;
        gap: 2.5rem;
    }

    @media (max-width: 800px) {
        flex-direction: column;
    }

    @media (max-width: 560px) {
        margin: 0 2.5rem;
    }
`
export const StyledImageOne = styled.div`
    margin: 0 4.188rem 0 12.625rem;

    @media (max-width: 1280px) {
        margin: 0 2.094rem 0 6.313rem;
    }

    @media (max-width: 1040px) {
        margin: 0;
        width: 50vw;
    }

    @media (max-width: 800px) {
        margin: auto;
        width: 100%;
    }
`

export const StyledImageTwo = styled.div`
    margin: 7rem 5.875rem 0 4.188rem;

    @media (max-width: 1280px) {
        margin: 7rem 2.875rem 0 2.094rem;
    }

    @media (max-width: 1040px) {
        margin: 0;
        width: 50vw;
    }

    @media (max-width: 800px) {
        margin: auto;
        width: 100%;
    }
`