import styled from "styled-components";

export const StyledTestimonial = styled.section`

`

export const WhiteBGGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(16, 1fr);
    grid-column-gap: 1.5rem;
    padding: 0 4.5rem;
    position: relative;
`

export const GreenBGGrid = styled.div`
    background-color: ${({ theme }) => theme.colors.darkgreen};
    display: grid;
    grid-template-columns: repeat(16, 1fr);
    grid-column-gap: 1.5rem;
    padding: 0 4.5rem;

    @media (max-width: 560px) {
        padding: 0 3rem;
    }
`

// --- Content --- //

export const Quotation = styled.svg`
    background-color: ${({ theme }) => theme.colors.mint};
    padding: 2.4vw 2.1vw;
    width: 2.5vw;
`

export const StyledQuote = styled.div`
    border-left: 2px solid ${({ theme }) => theme.colors.gunmetalgray};
    grid-column-start: 4;
    grid-column-end: 14;
    padding-left: 5rem;

    @media (max-width: 1280px) {
        grid-column-start: 3;
        grid-column-end: 15;
        padding-left: 4.5rem;
    }

    @media (max-width: 1040px) {
        grid-column-start: 2;
        grid-column-end: 16;
    }

    @media (max-width: 800px) {
        grid-column-start: 1;
        padding-left: 3.5rem;
    }

    @media (max-width: 560px) {
        padding-left: 3rem;
    }

    h2 { // "Our partnership..."
        color: white;
        line-height: 4.25rem;
        margin: 0;
        padding-top: 4.5rem;

        @media (max-width: 800px) {
            font-size: 2.5em;
            line-height: 3.75rem;
        }

        @media (max-width: 560px) {
            font-size: 1.5em;
            line-height: 2.75rem;
        }
    }
`

export const StyledClient = styled.div`
    border-left: 8px solid white;
    grid-column-start: 4;
    grid-column-end: 16;
    margin-top: 2.5rem;
    padding-left: 5rem;

    @media (max-width: 1280px) {
        grid-column-start: 3;
        padding-left: 4.5rem;
    }

    @media (max-width: 1040px) {
        grid-column-start: 2;
        padding-left: 4rem;
    }

    @media (max-width: 800px) {
        grid-column-start: 1;
        margin-bottom: 2.5rem;
        padding-left: 3.5rem;
    }

    @media (max-width: 560px) {
        padding-left: 3rem;
    }

    h5 { // Jason & Founder
        color: ${({ theme }) => theme.colors.slategray};
        letter-spacing: 0.25em;
        margin: 0;

        @media (max-width: 800px) {
            font-size: 1.25em;
            line-height: 1.5em;
        }
    }
`

// --- Motifs --- //

// --- White BG --- //

export const GrayLines = styled.div`
    grid-column-start: 3;
    grid-column-end: 5;
    position: relative;

    svg {
        bottom: 0;
        height: 6.67vw;
        opacity: .25; 
        position: absolute;
        width: 6.67vw;
    }
`

export const DarkGreenSquare = styled.div`
    grid-column-start: 9;
    grid-column-end: 10; 
    position: relative;

    div {
        background-color: ${({ theme }) => theme.colors.darkgreen};
        bottom: 0;
        height: 6.67vw;
        position: absolute;
        width: 6.67vw;  
    }
`

export const LgMintSquare = styled.div`
    grid-column-start: 12;
    grid-column-end: 14;
    position: relative;

    div {
        background-color: ${({ theme }) => theme.colors.mint};
        bottom: 0;
        height: 6.67vw;
        position: absolute;
        width: 6.67vw;
    }
`

// --- Green BG --- //

export const WhiteLines = styled.div`
    grid-column-start: 7;
    grid-column-end: 9;

    @media (max-width: 1040px) {
        padding: 9rem 0 2.5rem 0;
    }
    
    svg {
        height: 6.67vw;
        width: 6.67vw;
    }
`

export const ThreeSquares = styled.div`
    grid-column-start: 13;
    grid-column-end: 14;
    position: relative;

    svg {
        position: absolute;
        top: 50%;
        width: 1.67vw;
    }
`

export const SmSquareShadow = styled.div`
    grid-column-start: 12;
    grid-column-end: 13;
    position: relative;

    svg {
        height: 1vw;
        margin-top: 6.3vw;
        position: absolute;
        right: 0;
        width: 1vw;
    }
`

export const OmbreSquares = styled.div`
    grid-column-start: 7;
    grid-column-end: 9;
    position: relative;

    svg {
        margin-top: 8.28vw;
        position: absolute;
        left: 25%;
        width: 6.67vw;
    }
`

export const LgPaleMintSquare = styled.div`
    grid-column-start: 13;
    grid-column-end: 15;
    position: relative;

    div {
        background-color: ${({ theme }) => theme.colors.mint};
        height: 6.67vw;
        margin-top: 7.4vw;
        opacity: .05;
        position: absolute;
        width: 6.67vw;
    }
`

export const FiveSquares = styled.div`
    grid-column-start: 9;
    grid-column-end: 10;
    position: relative;

    svg {
        height: 2.5vw;
        margin-top: -2.25vw;
        position: absolute;
        width: 2.5vw;
    }
`

export const WindowPanes = styled.div`
    grid-column-start: 13;
    grid-column-end: 14;
    position: relative;

    svg {
        height: 3.75vw;
        margin-top: -3vw;
        position: absolute;
        width: 3.75vw;
    }
`

export const SmGreenSquare = styled.div`
    grid-column-start: 10;
    grid-column-end: 11;

    div {
        background-color: ${({ theme }) => theme.colors.limegreen};
        height: 1.25vw;
        opacity: .5;
        width: 1.25vw;
    }
`

export const X = styled.div`
    grid-column-start: 6;
    grid-column-end: 7;
    position: relative;

    svg {
        height: 1.25vw;
        position: absolute;
        top: 50%;
        width: 1.25vw;
    }
`

export const WhiteSquaresX = styled.div`
    grid-column-start: 12;
    grid-column-end: 14;

    @media (max-width: 1040px) {
        padding: 2.5rem 0 9rem 0;
    }

    svg {
        height: 6.67vw;
        margin-left: 4.5vw;
        width: 6.67vw;
    }
`
