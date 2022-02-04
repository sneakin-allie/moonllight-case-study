import styled from "styled-components";

export const StyledExplore = styled.section`
    background-color: ${({ theme }) => theme.colors.darkslategray};
`

export const StyledTitle = styled.div`
    h5 { // EXPLORE OUR OTHER SERVICES
        color: ${({ theme }) => theme.colors.silver};
        letter-spacing: 0.25em;
        padding: 9rem 0 0 22.5rem;
        margin: 0;
    }
`

// --- Card ---//

export const CardFlex = styled.div`
    display: flex;
    margin: 0.5rem 18.75rem 9rem 18.75rem;
`

export const StyledCard = styled.div`
    margin: 4rem;

    img {
        width: 100%;
    }

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

export const StyledNotesForm = styled.div`
    margin-left: auto;
    margin-right: auto;
    padding-bottom: 12rem;
    width: 33%;

    h1 { // Let's Compare Notes
        color: white;
        margin: 0;
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