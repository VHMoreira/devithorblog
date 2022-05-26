import { createGlobalStyle } from "styled-components"

const globalStyle = createGlobalStyle`
    @font-face {
        font-family: roboto;
        src: url("/fonts/Roboto-Black.ttf");
        font-weight: 900;
    }

    @font-face {
        font-family: roboto;
        src: url("/fonts/Roboto-Bold.ttf");
        font-weight: 700;
    }

    @font-face {
        font-family: roboto;
        src: url("/fonts/Roboto-Medium.ttf");
        font-weight: 500;
    }
    
    *{
        font-family: Roboto, Arial, Helvetica, sans-serif;
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    a {
        cursor: pointer;
        text-decoration: none;
    }
`

export default globalStyle