import styled from "styled-components";

export const StyledHeader = styled.section`
    background-color: ${({ theme }) => theme.colors.darkgreen};
    padding: 0 4.5rem;
`;

export const StyledNav = styled.nav`
    display: flex;
    justify-content: space-between;
    padding-top: 2rem;
    
    @media (max-width: 1040px) {
        flex-direction: column;
    }
`

export const StyledLogo = styled.div`
    margin-left: 7rem;

    @media (max-width: 1280px) {
        margin-left: 0;
    }

    svg { // Envy Labs logo
        display: inline-block;
        vertical-align: middle;
    }

    h6 { // Insightful web applications
        color: white;
        display: inline-block;
        padding-left: 1rem;
        margin: 0;
        vertical-align: middle;

        @media (max-width: 1040px) {
            display: none;
        }
    }
`

export const StyledLinks = styled.div`
    display: flex;  
    margin-right: 7rem;
    padding-top: 0.5rem;

    @media (max-width: 1280px) {
        margin-right: 0;
    }

    @media (max-width: 1040px) {
        padding-top: 1rem;
    }

    @media (max-width: 560px) {
        flex-direction: column;
    }

    a:nth-child(2) {
        padding: 0 1rem 0 2rem;

        @media (max-width: 1040px) {
            padding: 0 0.5rem 0 1rem;
        }

        @media (max-width: 560px) {
            padding: 0.5rem 0 0 0;
        }
    }

    a:nth-child(3) {
        padding: 0 1rem;

        @media (max-width: 1040px) {
            padding: 0 0.5rem;
        }

        @media (max-width: 560px) {
            padding: 0.5rem 0;
        }
    }

    a:nth-child(4) {
        padding: 0 2rem 0 1rem;

        @media (max-width: 1040px) {
            padding: 0 1rem 0 0.5rem;
        }

        @media (max-width: 560px) {
            padding: 0 0 0.5rem 0;
        }
    }

    a {
        font-family: "Space Grotesk";
        font-weight: normal;
        font-size: 0.875em;
        color: white;
        text-decoration: none;

        &:visited {
            text-decoration: none;
            color: white;
        }

        @media (max-width: 1040px) {
            
        }
    }
`

export const HeaderGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(16, 1fr);
    grid-column-gap: 1.5rem;
    padding: 11.5rem 0 28rem 0;

    h5 { // CASE STUDY
        color: ${({ theme }) => theme.colors.slategray};
        letter-spacing: 0.25em;
        grid-column-start: 3;
        grid-column-end: 5;
        margin: 0;
    }

    div { // line
        border-bottom: 1px solid ${({ theme }) => theme.colors.silver};
        grid-column-start: 5;
        grid-column-end: 15;
        margin-bottom: 1rem;
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

        @media (max-width: 1040px) {
            font-size: 5em;
        }
    }

    h4 { // rest of text
        color: ${({ theme }) => theme.colors.palemint};
        font-weight: normal;
        grid-column-start: 5;
        grid-column-end: 13;
        line-height: 1.5em;
        padding: 0;
    }
`