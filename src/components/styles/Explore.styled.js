import styled from "styled-components";

export const StyledExplore = styled.section`
    background-color: ${({ theme }) => theme.colors.darkslategray};

    h5 { // EXPLORE OUR OTHER SERVICES
        color: ${({ theme }) => theme.colors.silver};
        letter-spacing: 0.25em;
        padding: 9rem 0 0 22.938rem;
        margin: 0;
    }
`
export const CardFlex = styled.div`
    display: flex;
    margin: 4.5rem 18.75rem 13.5rem 18.75rem;
`

export const StyledCard = styled.div`
    margin: 0 4.188rem;

    img {
        width: 100%;
    }

    h3 { // Product Disovery & Development
        color: white;
    }

    p { // rest of text
        font-family: "IBM Plex Serif";
        font-weight: normal;
        font-size: 1.5em;
        line-height: 2.5rem;
        color: ${({ theme }) => theme.colors.silver};
        border-bottom: 2px solid ${({ theme }) => theme.colors.silver};
        padding-bottom: 3rem;
    }
`

export const StyledNotesForm = styled.div`
    width: 33%;
    margin-left: auto;
    margin-right: auto;
    padding-bottom: 12rem;

    h1 { // Let's Compare Notes
        color: white;
        margin: 0;
    }

    p {
        font-family: "IBM Plex Serif";
        font-weight: normal;
        font-size: 1.5em;
        line-height: 2.5rem;
        color: ${({ theme }) => theme.colors.silver};
        margin: 2.25rem 0 3.313rem 0;
    }

    label {
        font-family: "Space Grotesk";
        font-weight: normal;
        font-size: 1.25em;
        color: white;
    }

    input {
        background: transparent;
        padding: 0;
        border: 1px solid ${({ theme }) => theme.colors.slategray};
        margin: 0.25rem 0 2rem 0;
        width: 100%;
        height: 3rem;
    }

    textarea {
        background: transparent;
        padding: 0;
        border: 1px solid ${({ theme }) => theme.colors.slategray};
        width: 100%;
        height: 12.5rem;
        margin: 0.25rem 0 2rem 0;
    }

    button {
        background-color: ${({ theme }) => theme.colors.limegreen};
        color: ${({ theme }) => theme.colors.darkgreen};
        font-family: "Space Grotesk";
        font-weight: normal;
        font-size: 1em;
        letter-spacing: 0.25em;
        width: 19.125rem;
        height: 4.188rem;
        border: none;
        box-shadow: 0 0 0.25rem 0 ${({ theme }) => theme.colors.darkslategray};
        display: flex; 
        justify-content: space-between;
        align-items: center;
        padding: 0 1.5rem;
    }
`