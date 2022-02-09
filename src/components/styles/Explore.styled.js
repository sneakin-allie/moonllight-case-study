import styled from "styled-components";

export const StyledExplore = styled.section`
    background-color: ${({ theme }) => theme.colors.darkslategray};
`

export const StyledTitle = styled.div`
    grid-column-start: 3;
    grid-column-end: 15;

    h5 { 
        color: ${({ theme }) => theme.colors.silver};
        letter-spacing: 0.25em;
        padding: 0;
        margin: 9rem 0 2rem 2rem;
    }
`

// --- Cards ---//

export const CardGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(16, 1fr);
    grid-column-gap: 1.5rem;
`

export const ProductDiscoveryCard = styled.div`
    grid-column-start: 3;
    grid-column-end: 9;
    margin: 2rem;
    
    div {
        margin: 3rem 0 2rem 0;
    }

    h3 {
        color: white;
        display: inline-block;
        margin: 0 0 0 1.5rem;
    }

    p {
        border-bottom: 2px solid ${({ theme }) => theme.colors.silver};
        color: ${({ theme }) => theme.colors.silver};
        font-family: "IBM Plex Serif";
        font-size: 1.5em;
        font-weight: normal;
        line-height: 2.5rem;
        margin: 0;
        padding-bottom: 3rem;
    }
`

export const DevelopmentCard = styled.div`
    grid-column-start: 9;
    grid-column-end: 15;
    margin: 2rem;
    
    div {
        margin: 3rem 0 2rem 0;
    }

    h3 {
        color: white;
        display: inline-block;
        margin: 0 0 0 1.5rem;
    }

    p {
        border-bottom: 2px solid ${({ theme }) => theme.colors.silver};
        color: ${({ theme }) => theme.colors.silver};
        font-family: "IBM Plex Serif";
        font-size: 1.5em;
        font-weight: normal;
        line-height: 2.5rem;
        margin: 0;
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
`

// --- Form --- //

export const StyledNotesForm = styled.div`
    margin-left: auto;
    margin-right: auto;
    padding: 12rem 0;
    width: 33%;

    @media (max-width: 1280px) {
        width: 50%;
    }

    @media (max-width: 800px) {
        width: 66%;
    }

    h1 { // Let's Compare Notes
        color: white;
        margin: 0;

        @media (max-width: 1280px) {
            font-size: 3.2rem;
        }

        @media (max-width: 1040px) {
            font-size: 2.5rem;
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
        padding: 0 1.5rem;
        width: 19.125rem;
    }
`