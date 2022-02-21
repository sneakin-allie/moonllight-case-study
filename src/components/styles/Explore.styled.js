import styled from "styled-components";

export const StyledExplore = styled.section`
    background-color: ${({ theme }) => theme.colors.darkslategray};
`

export const TitleAndCardGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(16, 1fr);
    grid-column-gap: 1.5rem;
    padding: 0 4.5rem;

    @media (max-width: 800px) {
        grid-column-gap: 0;
        padding: 0 2.5rem;
    }
`

export const ExploreTitle = styled.div`
    grid-column-start: 3;
    grid-column-end: 16;
    margin: 9rem 0 0.5rem 4rem;

    @media (max-width: 1730px) {
        margin: 9rem 0 1.5rem 2.5rem;
    }

    @media (max-width: 1600px) {
        grid-column-start: 2;
        margin: 9rem 0 2rem 2.5rem;
    }

    @media (max-width: 1280px) {
        grid-column-start: 1;
        margin: 9rem 0 2rem 2.5rem;
    }

    @media (max-width: 1040px) {
        grid-column-start: 3;
        margin: 9rem 0 0 0;
    }

    @media (max-width: 800px) {
        grid-column-start: 2;
    }

    @media (max-width: 560px) {
        grid-column-start: 1;
    }

    h5 { 
        color: ${({ theme }) => theme.colors.silver};
        letter-spacing: 0.25em;
        margin: 0;

        @media (max-width: 1040px) {
            font-size: 1.25em;
        }
    }
`

// --- Cards ---//

export const ProductDiscoveryCard = styled.div`
    grid-column-start: 3;
    grid-column-end: 9;
    margin: 4rem;

    @media (max-width: 1730px) {
        margin: 2.5rem;
    }

    @media (max-width: 1600px) {
        grid-column-start: 2;
    }

    @media (max-width: 1280px) {
        grid-column-start: 1;
    }

    @media (max-width: 1040px) {
        grid-column-start: 3;
        grid-column-end: 15;
        margin: 4.5rem 0 4.5rem 0;
    }

    @media (max-width: 800px) {
        grid-column-start: 2;
        grid-column-end: 16;
    }

    @media (max-width: 560px) {
        grid-column-start: 1;
        grid-column-end: 17;
    }

    img {
        margin-bottom: 3rem;

        @media (max-width: 560px) {
            margin-bottom: 2rem;
        }
    }

    p {
        border-bottom: 2px solid ${({ theme }) => theme.colors.silver};
        color: ${({ theme }) => theme.colors.silver};
        font-family: "IBM Plex Serif";
        font-size: 1.5em;
        font-weight: normal;
        line-height: 2.5rem;
        margin: 2rem 0 0 0;
        padding-bottom: 3rem;

        @media (max-width: 560px) {
            font-size: 1.25em;
            line-height: 2.25rem;
            margin: 1rem 0 0 0;
        }
    }
`

export const DevelopmentCard = styled.div`
    grid-column-start: 9;
    grid-column-end: 15;
    margin: 4rem;

    @media (max-width: 1730px) {
        margin: 2.5rem;
    }

    @media (max-width: 1600px) {
        grid-column-end: 16;
    }

    @media (max-width: 1280px) {
        grid-column-end: 17;
    }

    @media (max-width: 1040px) {
        grid-column-start: 3;
        grid-column-end: 15;
        margin: 0 0 9rem 0;
    }

    @media (max-width: 800px) {
        grid-column-start: 2;
        grid-column-end: 16;
    }

    @media (max-width: 560px) {
        grid-column-start: 1;
        grid-column-end: 17;
    }

    img {
        margin-bottom: 3rem;

        @media (max-width: 560px) {
            margin-bottom: 2rem;
        }
    }

    p {
        border-bottom: 2px solid ${({ theme }) => theme.colors.silver};
        color: ${({ theme }) => theme.colors.silver};
        font-family: "IBM Plex Serif";
        font-size: 1.5em;
        font-weight: normal;
        line-height: 2.5rem;
        margin: 2rem 0 0 0;
        padding-bottom: 3rem;

        @media (max-width: 560px) {
            font-size: 1.25em;
            line-height: 2.25rem;
            margin: 1rem 0 0 0;
        }
    }
`

export const CardNumberAndTitle = styled.div`

    div {
        background-color: ${({ theme }) => theme.colors.mint};
        display: inline-block;
        font-family: 'Space Grotesk';
        font-size: 1.5em;
        font-weight: normal;
        height: 4.5rem;
        line-height: 4.5rem;
        text-align: center;
        width: 4.5rem;

        @media (max-width: 1600px) {
            height: 4rem;
            line-height: 4rem;
            width: 4rem;
        }

        @media (max-width: 1280px) {
            font-size: 1.25em;
            height: 3.5rem;
            line-height: 3.5rem;
            width: 3.5rem;
        }

        @media (max-width: 560px) {
            font-size: 1.25em;
            height: 2.5rem;
            line-height: 2.5rem;
            width: 2.5rem;
        }
    }

    h3 {
        color: white;
        display: inline-block;
        vertical-align: middle;
        margin: 0 0 0 1.5rem;

        @media (max-width: 1730px) {
            font-size: 2.25em;
        }

        @media (max-width: 1600px) {
            font-size: 2em;
        }

        @media (max-width: 1600px) {
            font-size: 1.875em;
        }

        @media (max-width: 560px) {
            font-size: 1.25em;
            margin: 0 0 0 1rem;
        }
    }
`

// --- Form --- //

export const StyledNotesForm = styled.div`
    margin-left: auto;
    margin-right: auto;
    padding: 12rem 0;
    width: 33vw;

    @media (max-width: 1815px) {
        width: 35vw;
    }

    @media (max-width: 1710px) {
        width: 40vw;
    }

    @media (max-width: 1600px) {
        width: 45vw;
    }

    @media (max-width: 1280px) {
        width: 50vw;
    }

    @media (max-width: 1040px) {
        padding: 0 0 12rem 0;
        width: 66vw;
    }

    @media (max-width: 800px) {
        width: 75vw;
    }

    h1 { // Let's Compare Notes
        color: white;
        margin: 0;

        @media (max-width: 1600px) {
            font-size: 3em;
        }

        @media (max-width: 800px) {
            font-size: 2.5em;
        }

        @media (max-width: 560px) {
            font-size: 1.5em;
            line-height: 2.5rem;
        }
    }

    p {
        color: ${({ theme }) => theme.colors.silver};
        font-family: "IBM Plex Serif";
        font-size: 1.5em;
        font-weight: normal;
        line-height: 2.5rem;
        margin: 2.25rem 0 3.313rem 0;

        @media (max-width: 560px) {
            font-size: 1.25em;
            line-height: 2.25rem;
        }
    }

    label {
        color: white;
        font-family: "Space Grotesk";
        font-size: 1.25em;
        font-weight: normal;
        line-height: 2.25rem;
    }

    input {
        background: transparent;
        border: 1px solid ${({ theme }) => theme.colors.slategray};
        height: 3rem;
        margin: 0.25rem 0 2rem 0;
        padding: 0;
        width: 100%;
    }

    textarea {
        background: transparent;
        border: 1px solid ${({ theme }) => theme.colors.slategray};
        height: 12.5rem;
        margin: 0.25rem 0 2rem 0;
        padding: 0;
        width: 100%;
    }

    button {
        align-items: center;
        background-color: ${({ theme }) => theme.colors.limegreen};
        border: none;
        box-shadow: 0 0 0.25rem 0 ${({ theme }) => theme.colors.darkslategray};
        color: ${({ theme }) => theme.colors.darkgreen};
        display: flex; 
        font-family: "Space Grotesk";
        font-size: 1em;
        font-weight: normal;
        justify-content: space-between;
        height: 4.188rem;
        letter-spacing: 0.25em;
        margin-top: 2.5rem; 
        padding: 0 1.5rem;
        transition: font-size 3s ease-in;
        width: 19.125rem;

        :hover {
            cursor: pointer;
            font-size: 1.5em;
        }

        @media (max-width: 560px) {
            width: 50vw;
        }
    }
`