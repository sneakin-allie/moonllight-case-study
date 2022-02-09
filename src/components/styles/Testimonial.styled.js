import styled from "styled-components";

export const StyledTestimonial = styled.section`

`

export const WhiteBGGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(16, 1fr);
    grid-column-gap: 1.5rem;
    padding: 0 4.5rem;
`

export const GreenBGGrid = styled.div`
    background-color: ${({ theme }) => theme.colors.darkgreen};
    display: grid;
    grid-template-columns: repeat(16, 1fr);
    grid-column-gap: 1.5rem;
    padding: 0 4.5rem;
`

// --- Content --- //

export const Quotation = styled.svg`
    background-color: ${({ theme }) => theme.colors.mint};
    padding: 2.875rem 2.5rem;
    width: 3rem;
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
        padding-left: 4rem;
    }

    @media (max-width: 800px) {
        grid-column-start: 2;
        padding-left: 3.5rem;
    }

    h2 { // "Our partnership..."
        color: white;
        line-height: 4.25rem;
        margin: 0;
        padding-top: 4.5rem;

        /*
        @media (max-width: 1280px) {
            font-size: 2.75em;
        }

        @media (max-width: 1040px) {
            font-size: 2.25em;
            line-height: 4rem;
        }

        @media (max-width: 800px) {
            font-size: 2,25em;
            line-height: 3.5rem;
        }
        */
    }
`

export const StyledClient = styled.div`
    border-left: 8px solid white;
    grid-column-start: 4;
    grid-column-end: 16;
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
        padding-left: 3.5rem;
    }

    h5 { // Jason & Founder
        color: ${({ theme }) => theme.colors.slategray};
        letter-spacing: 0.25em;
        margin: 0;
    }
`

// --- Motifs --- //

// --- White BG --- //

export const SmMintSquare = styled.div`
    background-color: ${({ theme }) => theme.colors.mint};
    grid-column-start: 10;
    grid-column-end: 11;
    height: 1.5rem;
    width: 1.5rem;
`

export const GrayLines = styled.svg`
    grid-column-start: 3;
    grid-column-end: 5;
    opacity: .25;
`

export const DarkGreenSquare = styled.div`
    background-color: ${({ theme }) => theme.colors.darkgreen};
    grid-column-start: 9;
    grid-column-end: 10;
    height: 6.67vw;
    width: 6.67vw;
`

export const LgMintSquare = styled.div`
    background-color: ${({ theme }) => theme.colors.mint};
    grid-column-start: 12;
    grid-column-end: 14;
    height: 6.67vw;
    width: 6.67vw;
`

// --- Green BG --- //

export const WhiteLines = styled.svg`
    grid-column-start: 7;
    grid-column-end: 9;
`

export const ThreeSquares = styled.svg`
    grid-column-start: 13;
    grid-column-end: 14;
`

export const SmWhiteSquare = styled.div`
    background-color: white;
    grid-column-start: 12;
    grid-column-end: 13;
    height: 1.125em;
    width: 1.125rem;
`

export const OmbreSquares = styled.svg`
    grid-column-start: 7;
    grid-column-end: 9;
`

export const LgPaleMintSquare = styled.div`
    background-color: ${({ theme }) => theme.colors.mint};
    grid-column-start: 13;
    grid-column-end: 15;
    height: 6.67vw;
    opacity: .05;
    width: 6.67vw;
`

export const FiveSquares = styled.svg`
    grid-column-start: 9;
    grid-column-end: 10;
`

export const WindowPanes = styled.svg`
    grid-column-start: 13;
    grid-column-end: 14;
`

export const SmGreenSquare = styled.div`
    background-color: ${({ theme }) => theme.colors.limegreen};
    grid-column-start: 10;
    grid-column-end: 11;
    height: 1.5rem;
    opacity: .5;
    width: 1.5rem;
`

export const X = styled.svg`
    grid-column-start: 6;
    grid-column-end: 7;
`

export const WhiteSquaresX = styled.svg`
    grid-column-start: 12;
    grid-column-end: 14;
`
