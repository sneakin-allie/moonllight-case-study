import styled from "styled-components";

export const StyledFooter = styled.section`
    background-color: ${({ theme }) => theme.colors.darkgreen};
    display: flex;
    flex-direction: column;

    @media (max-width: 1040px) {
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

export const FooterContent = styled.div`
    display: flex;
    gap: 8.375rem;
    justify-content: center;
    padding: 4.5rem;

    @media (max-width: 800px) {
        gap: 2.5rem;
    }    
`

// --- PRACTICAL APPLICATIONS --- //

export const StyledPractApp = styled.div`
    align-items: center;
    display: flex;
    width: 45vw;
    position: relative;

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
            font-size: 7.5em;
            line-height: 7.5rem;
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
    width: 12vw;
    margin: 0;
    padding: 0;

    @media (max-width: 1040px) {
        width: 50vw;
    }
`

export const StyledExplore = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
    width: 12vw;

    @media (max-width: 1040px) {
        width: 50vw;
    }

    svg {
        padding-right: 1rem;
    }
`

export const Nav = styled.div`
    background-color: ${({ theme }) => theme.colors.darkestgreen};
    display: flex;
    justify-content: space-between;
    margin: 0;

    @media (max-width: 1040px) {
        background-color: ${({ theme }) => theme.colors.darkgreen};
        flex-direction: column;
    }
`

export const StyledWhiteLogo = styled.div`
    margin: 1.625rem 0 1.625rem 12.625rem;

    @media (max-width: 1600px) {
        margin: 1.625rem 0 1.625rem 8.125rem;
    }

    @media (max-width: 1040px) {
        line-height: 3rem;
        margin: 4.5rem 0 0 4.5rem;
    }
`

export const StyledContact = styled.div`
    display: flex;
    margin: 2.5rem 14.688rem 0 0;
    vertical-align: middle;

    @media (max-width: 1600px) {
        margin: 2.5rem 10rem 0 0;
    }

    @media (max-width: 1040px) {
        flex-direction: column;
        margin: 0 0 0 4.5rem;
    }

    h6 { // GET IN TOUCH
        border: none;
        color: ${({ theme }) => theme.colors.palemint};
        display: inline-block;
        letter-spacing: 0.25em;
        margin: 0;
        padding: 0;
        vertical-align: middle;

        @media (max-width: 1040px) {
            display: none;
        }
    }
    
    p { // email & phone
        display: block;
        font-family: "IBM Plex Serif";
        font-weight: normal;
        font-size: 1.25em;
        color: ${({ theme }) => theme.colors.palemint};

        @media (max-width: 1040px) {
            line-height: 3rem;
        }
    }

    svg { // icons for email & phone
        display: inline-block;
        margin-left: 1.5rem;
        border-left: 4px solid ${({ theme }) => theme.colors.gunmetalgray};
        padding-left: 1.5rem;
        margin-right: 0.5rem;
        vertical-align: middle;

        @media (max-width: 1040px) {
            display: none;
        }
    }
`

// --- Motifs --- //

export const SmX = styled.div`
    position: absolute;
    top: 35%;

    svg {
        height: 1.5vw;
        width: 1.5vw;
    }
`

export const MedTealSquare = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    
    div {
        background-color: ${({ theme }) => theme.colors.teal};
        height: 2.5vw;
        opacity: 0.5;
        width: 2.5vw;
    }
`

export const OmbreSquares = styled.div`
    position: absolute;
    right: 0;
    top: 25%;

    svg {
        width: 6.67vw;
    }
`

export const WindowPanes = styled.div`
    position: absolute;
    bottom: 0;

    svg {
        height: 3.75vw;
        width: 3.75vw;
    }
`