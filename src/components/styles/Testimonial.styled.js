import styled from "styled-components";

export const StyledTestimonial = styled.section`
`

// --- Grids --- //

export const WhiteGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(16, 1fr);
    grid-column-gap: 1.5rem;
    padding: 0 4.5rem;
`

export const GreenGrid = styled.div`
    background-color: ${({ theme }) => theme.colors.darkgreen};
    display: grid;
    grid-template-columns: repeat(16, 1fr);
    grid-column-gap: 1.5rem;
    padding: 0 4.5rem;
`
// --- Content --- //

export const StyledQuotation = styled.div`
    background-color: ${({ theme }) => theme.colors.mint};
    display: flex;
    grid-column-start: 5;
    height: 8rem;
    margin: 0;
    width: 8rem;

    svg {
        margin: auto;
        width: 3rem;
    }
`

export const StyledQuote = styled.div`
    border-left: 2px solid ${({ theme }) => theme.colors.gunmetalgray};
    grid-column-start: 4;
    grid-column-end: 14;
    padding-left: 5rem;

    h2 { // "Our partnership..."
        color: white;
        line-height: 4.25rem;
        margin: 0;
    }
`

export const StyledClient = styled.div`
    border-left: 8px solid white;
    grid-column-start: 4;
    grid-column-end: 14;
    padding-left: 5rem;

    h5 { // Jason & Founder
        color: ${({ theme }) => theme.colors.slategray};
        letter-spacing: 0.25em;
        margin: 0;
    }
`

// --- Motifs --- //

export const GrayLines = styled.div`
    bottom: 0;
    grid-column-start: 4;
    opacity: .25;
`

export const DarkGreenSquare = styled.div`
    background-color: ${({ theme }) => theme.colors.darkgreen};
    grid-column-start: 9;
    height: 8.025rem;
    width: 8.025rem;
`

export const SmMintSquare = styled.div`
    background-color: ${({ theme }) => theme.colors.mint};
    grid-column-start: 10;
    height: 1.5rem;
    width: 1.5rem;
`

export const LgMintSquare = styled.div`
    background-color: ${({ theme }) => theme.colors.mint};
    grid-column-start: 13;
    height: 8.025rem;
    width: 8.025rem;
`

export const WhiteLines = styled.div`
    grid-column-start: 7;
`

export const ThreeSquares = styled.div`
    grid-column-start: 13;
    position: relative;

    svg {
        position: absolute;
        bottom: 0;
    }
`

export const SmWhiteSquare = styled.div`
    background-color: white;
    height: 1.125em;
    margin-left: 54.5rem;
    width: 1.125rem;
`

export const OmbreSquares = styled.div`
    margin: 1rem 0 -4.5rem 19rem;
`

export const LgPaleMintSquare = styled.div`
    background-color: ${({ theme }) => theme.colors.mint};
    height: 8rem;
    margin: 2.5rem 0 -3.5rem 56rem;
    opacity: .05;
    width: 8rem;
`

export const FiveSquares = styled.div`
    grid-column-start: 9;
    margin: -2.5rem 0 0 0;
`

export const WindowPanes = styled.div`
    grid-column-start: 13;
    margin: -3rem 0 0 0;
`

export const SmGreenSquare = styled.div`
    background-color: ${({ theme }) => theme.colors.limegreen};
    grid-column-start: 10;
    height: 1.5rem;
    margin: 2.5rem 0 1.5rem 0;
    opacity: .5;
    width: 1.5rem;
`

export const X = styled.div`
    grid-column-start: 6;
    margin: 3.5rem 0 0 0;
`

export const WhiteSquaresX = styled.div`
    grid-column-start: 13;
`
