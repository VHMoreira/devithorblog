import { createGlobalStyle } from "styled-components"

const globalStyle = createGlobalStyle`
    :root {
        --principal-color: #07071c;
        --principal-light-color: #8A8AF2;
        --principal-dark-color: #07071c;
        --secondary-color: #C7A941;
        --secondary-light-color: #FBDB6D;
        --secondary-dark-color: #6D5707;
        --dark-color: #3C3C3C;
        --light-color: #FEFEFE;
        --glass-grey-color: #76767670;
    }

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
        font-weight: 500;
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