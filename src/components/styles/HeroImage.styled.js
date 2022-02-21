import styled from "styled-components";

export const StyledHeroImage = styled.div`
    margin: auto;
    margin-top: -18.75rem;
    width: 80vw;

    animation-duration: 5s;
    animation-name: boxslide;

    @keyframes boxslide {
        from {
            margin-left: 100%;
            width: 300%;
        }

        to {
            margin-left: 0;
            width: 100%
        }
    }

    @media (max-width: 1040px) {
        margin: 0;
        width: 100vw;
    }
`