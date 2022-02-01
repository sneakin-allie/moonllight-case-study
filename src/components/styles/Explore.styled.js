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
        margin: 0;
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
        margin-bottom: 2rem;
    }

    textarea {
        background: transparent;
        padding: 0;
        border: 1px solid ${({ theme }) => theme.colors.slategray};
    }
`