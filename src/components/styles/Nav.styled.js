import styled from "styled-components";

export const StyledNav = styled.nav`
    background-color: ${({ theme }) => theme.colors.darkgreen};
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: none;
    padding: 2rem 12.5rem 0 12.5rem;

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
        // add link, visited, hover, active
    }

`