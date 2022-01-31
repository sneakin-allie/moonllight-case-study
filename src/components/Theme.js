/* 
A theme is a JavaScript object that all of our components will have access to via a prop. 
There are no requirements or limitations on its structure; we can put anything at all in there.
*/

// Define what props.theme will look like
const theme = { 
    colors: {
        darkgreen: '#052324',
        teal: '#047870',
        emerald: '#1DCA7F',
        aquamarine: '#7EE8B9',
        mint: '#BEF0DB',
        palemint: '#E8FAF3', 
        darkslategray: '#314448',
        gunmetalgray: '#455C5A', 
        slategray: '#7B9291', 
        silver: '#BDC8C8',
    },
    fonts: {
        ibmPlexSerif: "IBM Plex Serif",
        spaceGrotesk: "Space Grotesk",
    },
};

export default theme;