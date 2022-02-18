import styled from "styled-components";

export const StyledQuickHits = styled.section`
    display: grid;
    grid-template-columns: repeat(16, 1fr);
    grid-column-gap: 1.5rem;

    @media (max-width: 800px) {
        margin-bottom: 0rem;
    }  

    @media (max-width: 560px) {
        grid-column-gap: 0;
    } 
`             

export const StyledPara = styled.div`
    grid-column-start: 1;
    grid-column-end: 11;

    @media (max-width: 1280px) {
        grid-column-end: 10;
    }

    @media (max-width: 1040px) {
        grid-column-start: 1;
        grid-column-end: 15;
    }

    h2 {
        color: ${({ theme }) => theme.colors.darkgreen};
        margin: 0;
        border-bottom: 2px solid ${({ theme }) => theme.colors.silver};
        padding: 0 0 13.5rem 19.5rem;

        @media (max-width: 1280px) {
            font-size: 2.5em;
            padding: 0 0 4.5rem 10.5rem;
        }

        @media (max-width: 1040px) {
            padding: 0 0 4.5rem 4.5rem;
        }

        @media (max-width: 800px) {
            font-size: 2em;
            line-height: 3rem;
        }

        @media (max-width: 560px) {
            font-size: 1.5em;
            line-height: 2.5rem;
            padding: 0 0 2.5rem 2.5rem;
        }
    }
`

export const StyledList = styled.div`
    grid-column-start: 12;
    grid-column-end: 17;

    @media (max-width: 1280px) {
        grid-column-start: 11;
    }

    @media (max-width: 1040px) {
        grid-column-start: 2;
        grid-column-end: 17;
        margin: auto;
        margin-top: 9rem;
    }

    @media (max-width: 560px) {
        grid-column-start: 1;
        grid-column-end: 16;
        margin-top: 4.5rem;
    }

    h3 {
        color: ${({ theme }) => theme.colors.darkgreen};
        margin: 0;

        @media (max-width: 560px) {
            font-size: 2em;
            line-height: 3rem;
        }
    }

    ol {
        font-family: "Space Grotesk";
        font-weight: normal;
        padding: 0;
        margin: 0;
        list-style-type: none;
        counter-reset: count;
    }

    ul {
        list-style-type: none;
        font-family: "IBM Plex Serif";
        color: ${({ theme }) => theme.colors.gunmetalgray};
        line-height: 2.5rem;
        padding: 0;

        li:first-child::before {
            counter-increment: count;
            content: counter(count, decimal-leading-zero);
            font-family: "Space Grotesk";
            color: ${({ theme }) => theme.colors.darkgreen};
            padding-right: 4.5rem;

            @media (max-width: 1290px) {
                padding-right: 3rem;
            }

            @media (max-width: 560px) {
                padding-right: 2rem;
            }
        }

        li:first-child {
            font-weight: bold;
            font-size: 1.875em;
            margin-top: 3rem;

            @media (max-width: 560px) {
                margin-top: 2.5rem;
                font-size: 1.5em;
                line-height: 2.5rem;
            }
        }

        li:nth-child(1n + 2) {
            font-weight: normal;
            font-size: 1.5em;
            padding-left: 6.8rem;

            @media (max-width: 1290px) {
                padding-left: 5.3rem;
            }

            @media (max-width: 560px) {
                padding-left: 3.8rem;
            }
        }
    }
`