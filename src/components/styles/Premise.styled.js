import styled from "styled-components";

export const StyledPremise = styled.div`
    color: ${({ theme }) => theme.colors.darkGreen};
    margin: 0 auto;
    width: 50%;

    h3 {
        font-size: 5.625em;
    }

    p {
        font-size: 1.875em;
    }
`

// needs font