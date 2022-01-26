import styled from "styled-components";

export const StyledHeader = styled.header`
    background-color: ${({ theme }) => theme.colors.darkGreen};
    padding: 40px 0;

    // nesting; will only style the h1 inside the header
    h1 {
        color: #7B9291;
    }

    h2 {
        color: #7B9291;
    }

    p {
        color: #E8FAF3;
    }

`;

export const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 40px;
    color: white;
`