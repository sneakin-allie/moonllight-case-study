import styled from "styled-components";

export const StyledHeader = styled.section`
    background-color: ${({ theme }) => theme.colors.darkgreen};
`;

export const StyledNav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 12.625rem 0 12.625rem;
    
    div {
        display: flex;
        align-items: center;
    }

    svg {
        display: inline-block;
    }

    h6 { // Insightful web applications
        color: white;
        display: inline-block;
        padding-left: 1rem;
        margin: 0;
    }

    a { // nav links
        font-family: "Space Grotesk";
        font-weight: normal;
        font-size: 0.875em;
        color: white;
        text-decoration: none;
        margin: 1em;

        &:visited {
            text-decoration: none;
            color: white;
        }
    }
`

export const HeaderGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(16, 1fr);
    grid-column-gap: 1.5rem;
    padding: 13.5rem 0 28rem 0;

    h5 { // CASE STUDY
        color: ${({ theme }) => theme.colors.slategray};
        letter-spacing: 0.25em;
        grid-column-start: 3;
        grid-column-end: 5;
        margin: 0;
    }

    svg { // line/border; to be done in CSS
        grid-column-start: 5;
        grid-column-end: 15;
        margin: auto;
    }

    p { // Moonllight
        font-family: "Space Grotesk";
        font-weight: lighter;
        font-size: 10em;
        color: ${({ theme }) => theme.colors.slategray};
        grid-column-start: 3;
        grid-column-end: 11;
        padding: 4.5rem 0 3.125rem 0;
        margin: 0;
    }

    div {  // p text div
        grid-column-start: 5;
        grid-column-end: 13;
    }

    div > p { // rest of text
        font-family: "IBM Plex Serif";
        font-weight: normal;
        font-size: 1.875em;
        color: ${({ theme }) => theme.colors.palemint};
        line-height: 1.5em;
        padding: 0;
    }
`