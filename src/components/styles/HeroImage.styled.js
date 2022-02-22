import styled from "styled-components";

export const StyledHeroImage = styled.div`
    margin: auto;
    margin-top: -18.75rem;
    width: 80vw;
    animation-name: moveimage;
    animation-duration: 3s;

    @keyframes moveimage{
        from{ transform: translateX(100%)}
        to{ transform: translateX(0)}
    }

    @media (max-width: 1040px) {
        margin: 0;
        width: 100vw;
    }
`