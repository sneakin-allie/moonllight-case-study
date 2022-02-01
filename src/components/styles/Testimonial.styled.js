import styled from "styled-components";

/*
export const StyledMotifs = styled.div`
    display: grid;
    grid-template-columns: repeat(16, 1fr);
    grid-column-gap: 1.5rem;

    svg {

    }
`
*/

export const StyledMotifs = styled.div`
    display: grid;
    grid-template-columns: repeat(16, 1fr);
    grid-column-gap: 1.5rem;

`

export const StyledGrayLines = styled.svg`
    grid-column-start: 4;
`

export const StyledTestimonial = styled.section`
    background-color: ${({ theme }) => theme.colors.darkgreen};
    display: grid;
    grid-template-columns: repeat(16, 1fr);
    grid-column-gap: 1.5rem;

    svg {
        grid-column-start: 7;
    }

    div {
        background-color: ${({ theme }) => theme.colors.mint};
        width: 8rem;
        height: 8rem;
        margin: 0;
        grid-column-start: 5;
        display: flex;
    }

    div > svg {
        width: 3rem;
        margin: auto;
    }

    h2 { // "Our partnership..."
        color: white;
        margin: 0;
        grid-column-start: 5;
        grid-column-end: 14;
    }

    h5 { // Jason & Founder
        color: ${({ theme }) => theme.colors.slategray};
        letter-spacing: 0.25em;
        margin: 0;
        grid-column-start: 5;
        grid-column-end: 9;
    }
`

/* example of styling individual imgs
export const StyledDiscoveryImages = styled.section`
    div {
        display: flex;
    }
`

export const StyledHandDrawnWires = styled.img`
    width: 100%;
    margin: 9rem 12.625rem 2.25rem 12.625rem;
`

export const StyledDigitalWires = styled.img`
    width: 100%;
    margin: 2.25rem 12.625rem 2.25rem 12.625rem;
`

export const StyledIcons = styled.img`
    width: 100%;
    margin: 2.25rem 0.75rem 13.5rem 12.625rem;
`

export const StyledMoonllightLogo = styled.img`
    width: 100%;
    margin: 2.25rem 12.625rem 13.5rem 0.75rem;
`
*/