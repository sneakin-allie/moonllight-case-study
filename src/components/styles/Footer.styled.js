import styled from "styled-components";

export const StyledFooter = styled.section`
    background-color: ${({ theme }) => theme.colors.darkgreen};
`

export const FooterGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(16, 1fr);
    grid-column-gap: 1.5rem;

    p {
        padding: 0;
        margin: 0;
    }

    h6 { // Navigate & Explore
        color: ${({ theme }) => theme.colors.palemint};
        letter-spacing: 0.25em;
    }

    a {
        font-family: "IBM Plex Serif";
        font-weight: normal;
        font-size: 1.25em;
        color: ${({ theme }) => theme.colors.palemint};
        text-decoration: none;
        line-height: 3rem;
    }

    svg {
        grid-column-start: 1;
    }
`

export const StyledTealSquare = styled.div`
    background-color: ${({ theme }) => theme.colors.teal};
    opacity: 0.5;
    width: 3rem;
    height: 3rem;
    grid-column-start: 9;
`

export const StyledPractApp = styled.div`
    font-family: "IBM Plex Serif";
    font-weight: 300;
    font-size: 9.375em;
    color: ${({ theme }) => theme.colors.silver};
    grid-column-start: 2;
    grid-column-end: 10;
`

export const StyledNavigate = styled.ul`
    list-style-type: none;
    padding: 0;
    grid-column-start: 11;
    grid-column-end: 13;

    h6 {
        border-bottom: 1px solid ${({ theme }) => theme.colors.slategray};
        padding-bottom: 1.5rem;
        margin-bottom: 1.5rem;
    }
`

export const StyledExplore = styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 0;
    grid-column-start: 14;
    grid-column-end: 16;

    h6 {
        border-bottom: 1px solid ${({ theme }) => theme.colors.slategray};
        padding-bottom: 1.5rem;
        margin-bottom: 1.5rem;
    }
`

export const StyledNav = styled.nav`
    background-color: ${({ theme }) => theme.colors.darkestgreen};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2.5rem 14.688rem 2.5rem 12.625rem;

    h6 { // GET IN TOUCH
        color: ${({ theme }) => theme.colors.palemint};
        letter-spacing: 0.25em;
        margin: 0;
    }
    
    p {
        font-family: "IBM Plex Serif";
        font-weight: normal;
        font-size: 1.25em;
        color: ${({ theme }) => theme.colors.palemint};
        margin: 0;
    }

    div {
        display: flex;
        align-items: center;
    }

    div svg {
        margin-left: 1.5rem;
        border-left: 4px solid ${({ theme }) => theme.colors.gunmetalgray};
        padding-left: 1.5rem;
        margin-right: 0.5rem;
    }
`