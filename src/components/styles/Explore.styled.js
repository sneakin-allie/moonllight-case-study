import styled from "styled-components";

export const StyledExplore = styled.section`
    background-color: ${({ theme }) => theme.colors.darkslategray};
`

// --- Cards ---//

export const Cards = styled.div`
    display: flex;
    gap: 8.375rem;
    justify-content: center;
    padding: 4.5rem;
`

export const ProductDiscoveryCard = styled.div`
    width: 28vw;
    // margin: 4.188rem;
    /*
    @media (max-width: 1280px) {
        grid-column-start: 2;
        grid-column-end: 9;
    }

    @media (max-width: 800px) {
        grid-column-start: 2;
        grid-column-end: 16;
        margin-bottom: 9rem;
    }
    */

    h5 { 
        color: ${({ theme }) => theme.colors.silver};
        letter-spacing: 0.25em;
        margin: 9rem 0 4.5rem 0;
        padding: 0;
    }

    img {
        margin-bottom: 3rem;
    }

    div {
        margin: auto;
        vertical-align: middle;
    }

    h3 {
        color: white;
        display: inline-block;
        vertical-align: middle;
        margin: 0 0 0 1.5rem;

        @media (max-width: 1600px) {
            font-size: 2.3em;
        }

        @media (max-width: 1280px) {
            font-size: 2em;
        }

        @media (max-width: 800px) {
            font-size: 1.8em;
        }

        @media (max-width: 560px) {
            font-size: 1.5em;
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
    }
`

export const DevelopmentCard = styled.div`
    width: 28vw;

    h5 { 
        color: ${({ theme }) => theme.colors.darkslategray};
        letter-spacing: 0.25em;
        margin: 9rem 0 4.5rem 0;
        padding: 0;
    }

    img {
        margin-bottom: 3rem;
    }

    div {
        margin: auto;
        vertical-align: middle;
    }

    h3 {
        color: white;
        display: inline-block;
        vertical-align: middle;
        margin: 0 0 0 1.5rem;

        @media (max-width: 1600px) {
            font-size: 2.3em;
        }

        @media (max-width: 1280px) {
            font-size: 2em;
        }

        @media (max-width: 800px) {
            font-size: 1.8em;
        }

        @media (max-width: 560px) {
            font-size: 1.5em;
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
    }
`

export const StyledNumber = styled.div`
    background-color: ${({ theme }) => theme.colors.mint};
    display: inline-block;
    font-family: 'Space Grotesk';
    font-size: 1.5em;
    font-weight: normal;
    height: 4.5rem;
    line-height: 4.5rem;
    margin: 0;
    text-align: center;
    width: 4.5rem;  

    @media (max-width: 1600px) {
        height: 4rem;
        line-height: 4rem;
        width: 4rem;
    }

    @media (max-width: 1280px) {
        height: 3.5rem;
        line-height: 3.5rem;
        width: 3.5rem;
    }

    @media (max-width: 800px) {
        font-size: 1.3em;
        height: 3rem;
        line-height: 3rem;
        width: 3rem;
    }

    @media (max-width: 560px) {
        font-size: 1em;
        height: 2.5rem;
        line-height: 2.5rem;
        width: 2.5rem;
    }
`

// --- Form --- //

export const StyledNotesForm = styled.div`
    margin-left: auto;
    margin-right: auto;
    padding: 12rem 0;
    width: 33vw;

    @media (max-width: 1280px) {
        width: 50vw;
    }

    @media (max-width: 800px) {
        width: 80vw;
    }

    h1 { // Let's Compare Notes
        color: white;
        margin: 0;

        @media (max-width: 1280px) {
            font-size: 3.2rem;
        }

        @media (max-width: 800px) {
            font-size: 2.3rem;
        }
    }

    p {
        color: ${({ theme }) => theme.colors.silver};
        font-family: "IBM Plex Serif";
        font-size: 1.5em;
        font-weight: normal;
        line-height: 2.5rem;
        margin: 2.25rem 0 3.313rem 0;
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
        width: 19.125rem;
    }
`