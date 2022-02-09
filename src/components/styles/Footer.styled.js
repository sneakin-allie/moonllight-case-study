import styled from "styled-components";

export const StyledFooter = styled.section`
    background-color: ${({ theme }) => theme.colors.darkgreen};
    padding-top: 4.5rem;
`

export const FooterGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(16, 1fr);
    grid-column-gap: 1.5rem;
    margin: 0 4.5rem 0 4.5rem;

    @media (max-width: 1350px) {
        grid-column-gap: 1rem;
        margin: 0 2.5rem 0rem 2.5rem;
    }

    @media (max-width: 1280px) {
        grid-column-gap: 0rem;
        margin: 0 1rem 0rem 1rem;
    }

    @media (max-width: 1040px) {
        margin: 0 0 0rem 0;
    }

    p {
        padding: 0;
        margin: 0;
    }

    h6 { // Navigate & Explore titles
        color: ${({ theme }) => theme.colors.palemint};
        letter-spacing: 0.25em;
        border-bottom: 1px solid ${({ theme }) => theme.colors.slategray};
        margin: 0 0 1.5rem 0;
        padding-bottom: 1.5rem;
    }

    a {
        font-family: "IBM Plex Serif";
        font-weight: normal;
        font-size: 1.25em;
        color: ${({ theme }) => theme.colors.palemint};
        text-decoration: none;
        line-height: 3rem;
    }
`

// --- PRACTICAL APPLICATIONS --- //

export const StyledPractApp = styled.div`
    grid-column-start: 2;
    grid-column-end: 8;

    @media (max-width: 1040px) {
        grid-column-start: 2;
        grid-column-end: 16;
    }

    @media (max-width: 800px) {
        grid-column-start: 4;
    }

    @media (max-width: 560px) {
        grid-column-start: 3;
    }

    p {
        color: ${({ theme }) => theme.colors.silver};
        font-family: "IBM Plex Serif";
        font-weight: 200;
        font-size: 9.375em;
        line-height: 9.375rem;  

        @media (max-width: 1600px) {
            font-size: 7em;
        }

        @media (max-width: 1280px) {
            font-size: 6em;
            line-height: 8rem;
        }

        @media (max-width: 1040px) {
            font-size: 4.5em;
        }

        @media (max-width: 800px) {
            line-height: 6rem;
            margin-bottom: 4rem;
        }
    }

`

// --- Navigate and Explore sections --- //

export const StyledNavigate = styled.ul`
    list-style-type: none;
    grid-column-start: 11;
    grid-column-end: 13;
    margin: 0;
    padding: 0;

    @media (max-width: 1040px) {
        grid-column-start: 5;
        grid-column-end: 8;
    }

    @media (max-width: 800px) {
        grid-column-start: 5;
        grid-column-end: 9;
    }

    @media (max-width: 560px) {
        grid-column-start: 4;
        grid-column-end: 8;
    }
`

export const StyledExplore = styled.ul`
    grid-column-start: 14;
    grid-column-end: 16;
    list-style-type: none;
    margin: 0;
    padding: 0;

    @media (max-width: 1040px) {
        grid-column-start: 10;
        grid-column-end: 13;
    }

    @media (max-width: 800px) {
        grid-column-start: 10;
        grid-column-end: 14;
    }

    @media (max-width: 560px) {
        grid-column-start: 10;
        grid-column-end: 15;
    }

    svg {
        padding-right: 1rem;

        @media (max-width: 1280px) {
            padding-right: 0.5rem;
        }
    }
`

export const NavGrid = styled.nav`
    background-color: ${({ theme }) => theme.colors.darkestgreen};
    display: grid;
    grid-template-columns: repeat(16, 1fr);
    grid-column-gap: 1.5rem;
    padding: 2.5rem 0;
    margin: 0;

    @media (max-width: 1600px) {
        grid-column-gap: 0rem;
    }
`
export const StyledLogoFooter = styled.svg`
    grid-column-start: 2;
    grid-column-end: 5;
`

export const StyledContact = styled.div`
    grid-column-start: 10;
    grid-column-end: 17;
    padding-top: 1rem;

    @media (max-width: 1600px) {
        grid-column-start: 8;
    }

    @media (max-width: 1280px) {
        grid-column-start: 6;
    }

    @media (max-width: 1040px) {
        grid-column-start: 2;
        padding-top: 2.5rem;
    }

    h6 { // GET IN TOUCH
        color: ${({ theme }) => theme.colors.palemint};
        display: inline-block;
        letter-spacing: 0.25em;
        margin: 0;
        vertical-align: middle;

        @media (max-width: 800px) {
            display: block;
            margin-bottom: 0.5rem;
        }
    }
    
    p { // email & phone
        display: inline-block;
        font-family: "IBM Plex Serif";
        font-weight: normal;
        font-size: 1.25em;
        color: ${({ theme }) => theme.colors.palemint};
        margin: 0;
        vertical-align: middle;

        @media (max-width: 800px) {
            border-right: 4px solid ${({ theme }) => theme.colors.gunmetalgray};
            padding-right: 1.5rem;
            margin-right: 1.5rem;
        }

        @media (max-width: 560px) {
            border-right: 4px solid ${({ theme }) => theme.colors.gunmetalgray};
            padding-right: 0.5rem;
            margin-right: 0.5rem;
        }
    }

    svg { // icons for email & phone
        display: inline-block;
        margin-left: 1.5rem;
        border-left: 4px solid ${({ theme }) => theme.colors.gunmetalgray};
        padding-left: 1.5rem;
        margin-right: 0.5rem;
        vertical-align: middle;

        @media (max-width: 800px) {
            border-left: none;
            margin-left: 0;
            padding-left: 0;
            margin-right: 0.5rem;
        }
    }
`

// --- Motifs --- //

export const StyledTealSquare = styled.div`
    grid-column-start: 10;
    
    div {
        background-color: ${({ theme }) => theme.colors.teal};
        height: 3rem;
        opacity: 0.5;
        width: 3rem;
    }
`

export const StyledOmbreSquares = styled.div`
    grid-column-start: 8;
    grid-column-end: 10;
`

export const StyledX = styled.div`
    grid-column-start: 1;
`

export const StyledSquareGroup = styled.div`
    grid-column-start: 1;
`