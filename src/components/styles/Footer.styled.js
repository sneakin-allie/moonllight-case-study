import styled from "styled-components";

export const StyledFooter = styled.section`
    background-color: ${({ theme }) => theme.colors.darkgreen};
    display: flex;
    flex-direction: column;

    @media (max-width: 800px) {
        flex-direction: column-reverse;
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

/*
export const FooterGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(16, 1fr);
    grid-column-gap: 1.5rem;
    padding: 4.5rem;

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
*/

export const FooterContent = styled.div`
    display: flex;
    gap: 8.375rem;
    justify-content: center;
    padding: 4.5rem;

    @media (max-width: 800px) {
        justify-content: space-around;
    }
`

// --- PRACTICAL APPLICATIONS --- //

export const StyledPractApp = styled.div`
    width: 45vw;

    @media (max-width: 800px) {
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
    width: 10vw;
    margin: 0;
    padding: 0;

    @media (max-width: 800px) {
        margin: 2.5rem;
        width: 50vw;
    }
`

export const StyledExplore = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
    width: 10vw;

    @media (max-width: 800px) {
        margin: 2.5rem;
        width: 50vw;
    }

    svg {
        padding-right: 1rem;
    }
`

export const Nav = styled.div`
    background-color: ${({ theme }) => theme.colors.darkestgreen};
    display: flex;
    margin: 0;
    vertical-align: middle;

    @media (max-width: 800px) {
        padding: 2.5rem;
    }
    
`

/*
export const NavGrid = styled.nav`
    background-color: ${({ theme }) => theme.colors.darkestgreen};
    display: grid;
    grid-template-columns: repeat(16, 1fr);
    grid-column-gap: 1.5rem;
    padding: 2.5rem 0;
    margin: 0;
`
*/

export const StyledWhiteLogo = styled.div`
    margin: 1.625rem 0;

    @media (max-width: 800px) {
        margin: 0 0 4.5rem 0;
    }
    
`

export const StyledContact = styled.div`
    display: flex;

    h6 { // GET IN TOUCH
        border: none;
        color: ${({ theme }) => theme.colors.palemint};
        display: inline-block;
        letter-spacing: 0.25em;
        margin: 0;
        padding: 0;
        vertical-align: middle;

        @media (max-width: 800px) {
            display: none;
        }
    }
    
    p { // email & phone
        display: block;
        font-family: "IBM Plex Serif";
        font-weight: normal;
        font-size: 1.25em;
        color: ${({ theme }) => theme.colors.palemint};

        @media (max-width: 800px) {
            margin: 0 0 2.5rem 0;
        }
        
        // vertical-align: middle;

        /*

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
        */
    }

    svg { // icons for email & phone
        display: inline-block;
        margin-left: 1.5rem;
        border-left: 4px solid ${({ theme }) => theme.colors.gunmetalgray};
        padding-left: 1.5rem;
        margin-right: 0.5rem;
        vertical-align: middle;

        @media (max-width: 800px) {
            display: none;
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