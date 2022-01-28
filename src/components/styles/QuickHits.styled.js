import styled from "styled-components";

export const StyledQuickHits = styled.div`
    display: grid;
    grid-template-columns: repeat(16, 1fr);
    grid-column-gap: 1.5rem;
    margin-bottom: 13.5rem;

    h2 { // The start of the...
        grid-column-start: 3;
        grid-column-end: 11;
        margin: 0;
    }

    div {
        grid-column-start: 13;
        grid-column-end: 16;
        margin-bottom: 3rem;
    }

    h3 { // Our Quick Hits
        grid-column-start: 12;
        grid-column-end: 15;
        margin: 0;
    }

    h5 { // Number in mint box
        background-color: ${({ theme }) => theme.colors.palemint};
        width: 4.5rem;
        height: 4.5rem;
        text-align: center;
        line-height: 4.5rem;
        margin: 0;
        grid-column-start: 12;
    }

    header { // Product Discovery, Experience Design, Development
        font-family: "IBM Plex Serif";
        font-weight: normal;
        font-size: 1.875em;
        line-height: 2.5;
        margin: 0;
    }

    ul {
        list-style-type: none;
        grid-column-start: 12;
        grid-column-end: 16;
        padding: 0;
        margin: 0;
    }

    p { // rest of list items
        font-family: "IBM Plex Serif";
        font-weight: normal;
        font-size: 1.5em;
        line-height: 2.5;
        margin: 0;
    }

`