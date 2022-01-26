import styled from "styled-components";

export const StyledQuickHits = styled.div`
    color: ${({ theme }) => theme.colors.darkGreen};
    display: flex;
    justify-content: space-around;

    ul {
        list-style-type: none;
    }

`