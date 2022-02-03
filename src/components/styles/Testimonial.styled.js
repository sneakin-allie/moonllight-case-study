import styled from "styled-components";

export const StyledTestimonial = styled.section`
`

export const StyledSmMintSquare = styled.div`
    background-color: ${({ theme }) => theme.colors.mint};
    grid-column-start: 10;
    height: 1.5rem;
    width: 1.5rem;
`

export const StyledGrayLines = styled.div`
    bottom: 0;
    grid-column-start: 4;
    opacity: .25;
`

export const WhiteGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(16, 1fr);
    grid-column-gap: 1.5rem;
    padding: 0 4.5rem;
`

export const StyledDarkGreenSquare = styled.div`
    background-color: ${({ theme }) => theme.colors.darkgreen};
    grid-column-start: 9;
    height: 8.025rem;
    width: 8.025rem;
`

export const StyledLgMintSquare = styled.div`
    background-color: ${({ theme }) => theme.colors.mint};
    grid-column-start: 13;
    height: 8.025rem;
    width: 8.025rem;
`

export const GreenGrid = styled.div`
    background-color: ${({ theme }) => theme.colors.darkgreen};
    display: grid;
    grid-template-columns: repeat(16, 1fr);
    grid-column-gap: 1.5rem;
    padding: 0 4.5rem;
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

export const SmWhiteSquare = styled.div`
    grid-column-start: 12;
`

export const SixSquares = styled.div`
    grid-column-start: 9;
`

export const SquareGroup = styled.div`
    grid-column-start: 13;
`

export const StyledSmGreenSquare = styled.div`
    background-color: ${({ theme }) => theme.colors.limegreen};
    grid-column-start: 10;
    height: 1.5rem;
    margin-top: 4rem;
    opacity: .5;
    width: 1.5rem;
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

export const StyledOmbreSquares = styled.div`
    margin: 0 0 2rem 19rem;
`

export const X = styled.div`
    grid-column-start: 6;
`

export const WhiteSquares = styled.div`
    grid-column-start: 13;
`