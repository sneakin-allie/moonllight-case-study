import styled from "styled-components";

export const StyledFooter = styled.section`
    background-color: ${({ theme }) => theme.colors.darkgreen};
    display: grid;
    grid-template-columns: repeat(16, 1fr);
    grid-column-gap: 1.5rem;

    p {
        padding: 0;
        margin: 0;
    }

    h6 { // Navigate, Explore & Get In Touch
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
    margin: 0;
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

export const StyledBottomNav = styled.nav`
    grid-column-start: 2;
    grid-column-end: 16;
    
    p {
        font-family: "IBM Plex Serif";
        font-weight: normal;
        font-size: 1.25em;
        color: ${({ theme }) => theme.colors.palemint};
    }
`