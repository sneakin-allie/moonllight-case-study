import styled from "styled-components";

export const StyledFooter = styled.section`
    background-color: ${({ theme }) => theme.colors.darkgreen};
`

export const FooterGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(16, 1fr);
    grid-column-gap: 1.5rem;
    padding: 4.5rem;

    @media (max-width: 1600px) {
        padding: 2.5rem 0;
    }

    @media (max-width: 1280px) {

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
    margin: auto;

    @media (max-width: 1040px) {
        display: none;
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
    }

`

// --- Navigate and Explore sections --- //

export const StyledNavigate = styled.ul`
    list-style-type: none;
    grid-column-start: 11;
    grid-column-end: 13;
    margin: 0;
    padding: 0;

    @media (max-width: 1280px) {
        grid-column-start: 10;
    }

    @media (max-width: 1040px) {
        grid-column-start: 5;
        grid-column-end: 8;
    }

    @media (max-width: 800px) {
        grid-column-start: 3;
    }
`

export const StyledExplore = styled.ul`
    grid-column-start: 14;
    grid-column-end: 16;
    list-style-type: none;
    margin: 0;
    padding: 0;

    @media (max-width: 1280px) {
        grid-column-start: 13;
    }

    @media (max-width: 1040px) {
        grid-column-start: 10;
        grid-column-end: 13;
    }

    @media (max-width: 800px) {
        grid-column-end: 15;
    }

    svg {
        padding-right: 1rem;
    }
`

export const NavGrid = styled.nav`
    background-color: ${({ theme }) => theme.colors.darkestgreen};
    display: grid;
    grid-template-columns: repeat(16, 1fr);
    grid-column-gap: 1.5rem;
    padding: 2.5rem 0;
    margin: 0;
`
export const StyledWhiteLogo = styled.div`
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
            margin-bottom: 1rem;
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

export const SmX = styled.div`
    grid-column-start: 1;
    grid-column-end: 2;
    position: relative;

    svg {
        height: 1.5vw;
        margin-top: 9rem;
        position: absolute;
        right: 30%;
        width: 1.5vw;
    }
`

export const MedTealSquare = styled.div`
    grid-column-start: 9;
    grid-column-end: 10;
    position: relative;
    
    div {
        background-color: ${({ theme }) => theme.colors.teal};
        height: 2.5vw;
        opacity: 0.5;
        position: absolute;
        width: 2.5vw;
    }
`

export const OmbreSquares = styled.div`
    grid-column-start: 8;
    grid-column-end: 10;
    position: relative;

    svg {
        position: absolute;
        margin-top: 5rem;
        right: 25%;
        width: 6.67vw;
    }
`

export const WindowPanes = styled.div`
    grid-column-start: 1;
    grid-column-end: 2;
    position: relative;

    svg {
        bottom: 0;
        height: 3.75vw;
        margin-bottom: -4.5rem;
        position: absolute;
        width: 3.75vw;
    }
`