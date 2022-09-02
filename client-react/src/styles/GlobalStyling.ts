import { createGlobalStyle } from "styled-components";
import Decoration from "../assets/decoration.svg";

const GlobalStyles = createGlobalStyle`
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    body{
        position: relative;
    }

    body::after{
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;z-index:-1;
        background:url(${Decoration});
        background-size: cover;
        background-repeat: no-repeat;
    }


    li{
        list-style: none;
    }

    a{
        text-decoration: none;
    }

    p{
        font-family: "Montserrat", sans-serif;
    }

    .page-container{
        max-width: min(calc(100% - 2rem),1170px);
        margin-inline: auto;
    }

    
`;

export default GlobalStyles;
