import styled from "styled-components";

export const StyledHeader = styled.section`
    background-color: ${({ theme }) => theme.colors.darkgreen};
    padding: 0 4.5rem; 

    @media (max-width: 800px) {
        padding: 0 2.5rem;
    }

    @media (max-width: 560px) {
        padding: 0 2rem;
    }
`;

export const StyledNav = styled.nav`
    display: flex;
    justify-content: space-between;
    padding-top: 2rem;
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

    @media (max-width: 800px) {
        flex-direction: column;
    }

    @media (max-width: 560px) {
        padding: 0;
    }

    div {
        width: 10vw;
    }

    svg {
        color: white;

        @media (min-width: 561px) {
            display: none;
        }
    }

    a:nth-child(2) {
        padding: 0 1rem 0 2rem;

        @media (max-width: 800px) {
            padding: 1rem 0 0 0;
        }
    }

    a:nth-child(3) {
        padding: 0 1rem;

        @media (max-width: 800px) {
            padding: 1rem 0;
        }
    }

    a:nth-child(4) {
        padding: 0 2rem 0 1rem;

        @media (max-width: 800px) {
            padding: 0 0 1rem 0;
        }
    }

    a {
        font-family: "Space Grotesk";
        font-weight: normal;
        font-size: 0.875em;
        color: white;
        text-decoration: none;

        @media (max-width: 560px) {
            display: none;
        }
    }
`

export const ContentGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(16, 1fr);
    grid-column-gap: 1.5rem;
    padding: 11.5rem 0 28rem 0;

    @media (max-width: 1040px) {
        padding: 11.5rem 0;
    }

    @media (max-width: 560px) {
        grid-column-gap: 0;
    }

    h5 { // CASE STUDY
        border-bottom: 1px solid ${({ theme }) => theme.colors.silver};
        color: ${({ theme }) => theme.colors.slategray};
        letter-spacing: 0.25em;
        grid-column-start: 3;
        grid-column-end: 15;
        margin: 0;

        @media (max-width: 1040px) {
            grid-column-start: 2;
            grid-column-end: 16;
        }

        @media (max-width: 800px) {
            grid-column-start: 1;
        }

        @media (max-width: 560px) {
            font-size: 1em;
        }

    } // border line needs work

    p { // Moonllight
        font-family: "Space Grotesk";
        font-weight: lighter;
        font-size: 10em;
        color: ${({ theme }) => theme.colors.slategray};
        grid-column-start: 3;
        grid-column-end: 10;
        padding: 4.5rem 0 3.125rem 0;
        margin: 0;

        @media (max-width: 1040px) {
            font-size: 8em;
            grid-column-start: 2;
        }

        @media (max-width: 800px) {
            font-size: 5em;
            grid-column-start: 1;
        }

        @media (max-width: 560px) {
            font-size: 3em;
            grid-column-start: 1;
        }
    }

    h4 { // rest of text
        color: ${({ theme }) => theme.colors.palemint};
        font-weight: normal;
        grid-column-start: 5;
        grid-column-end: 14;
        line-height: 1.5em;
        padding: 0;

        @media (max-width: 1040px) {
            grid-column-start: 3;
            grid-column-end: 15;
        }

        @media (max-width: 800px) {
            grid-column-start: 1;
            grid-column-end: 17;
            font-size: 1.5em;
        }

        @media (max-width: 560px) {
            font-size: 1em;
        }
    }
`