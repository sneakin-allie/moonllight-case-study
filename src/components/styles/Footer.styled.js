import styled from "styled-components";

export const StyledFooter = styled.section`
    background-color: ${({ theme }) => theme.colors.darkgreen};
    padding-top: 4.5rem;
`

export const FooterGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(16, 1fr);
    grid-column-gap: 1.5rem;
    margin: 0 4.5rem 4.5rem 4.5rem;

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

export const StyledPractApp = styled.div`
    grid-column-start: 2;
    grid-column-end: 10;

    @media (max-width: 1040px) {
        
    }

    p {
        color: ${({ theme }) => theme.colors.silver};
        font-family: "IBM Plex Serif";
        font-weight: 200;
        font-size: 9.375em;
        line-height: 9.375rem;  

        @media (max-width: 1040px) {
            font-size: 5em;
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
`

export const StyledExplore = styled.ul`
    grid-column-start: 14;
    grid-column-end: 16;
    list-style-type: none;
    margin: 0;
    padding: 0;

    svg {
        padding-right: 1rem;
    }
`

export const StyledNav = styled.nav`
    background-color: ${({ theme }) => theme.colors.darkestgreen};
    display: grid;
    grid-template-columns: repeat(16, 1fr);
    grid-column-gap: 1.5rem;
    padding: 2.5rem 0;
`
export const StyledLogoFooter = styled.svg`
    grid-column-start: 2;
    grid-column-end: 5;
`

export const StyledContact = styled.div`
    grid-column-start: 9;
    grid-column-end: 16;
    padding-top: 1rem;

    @media (max-width: 1500px) {
        grid-column-start: 8;
    }

    @media (max-width: 1330px) {
        grid-column-start: 7;
    }

    @media (max-width: 1210px) {
        grid-column-start: 6;
    }

    @media (max-width: 1110px) {
        grid-column-start: 2;
        padding-top: 1.5rem;
    }

    h6 { // GET IN TOUCH
        color: ${({ theme }) => theme.colors.palemint};
        display: inline-block;
        letter-spacing: 0.25em;
        margin: 0;
        vertical-align: middle;
    }
    
    p { // email & phone
        display: inline-block;
        font-family: "IBM Plex Serif";
        font-weight: normal;
        font-size: 1.25em;
        color: ${({ theme }) => theme.colors.palemint};
        margin: 0;
        vertical-align: middle;
    }

    svg { // icons for email & phone
        display: inline-block;
        margin-left: 1.5rem;
        border-left: 4px solid ${({ theme }) => theme.colors.gunmetalgray};
        padding-left: 1.5rem;
        margin-right: 0.5rem;
        vertical-align: middle;
    }
`

// --- Motifs --- //

export const StyledTealSquare = styled.div`
    background-color: ${({ theme }) => theme.colors.teal};
    grid-column-start: 9;
    height: 3rem;
    opacity: 0.5;
    width: 3rem;
`

export const StyledOmbreSquares = styled.div`
    grid-column-start: 8;
    position: relative;

    svg {
        position: absolute;
        top: 4.5rem;
    }
`

export const StyledX = styled.div`
    grid-column-start: 1;
    position: relative;

    svg {
        position: absolute;
        right: 2rem;
        top: 10rem;
    }
`

export const StyledSquareGroup = styled.div`
    grid-column-start: 1;
    position: relative;

    svg {
        position: absolute;
        bottom: 0;
    }

`