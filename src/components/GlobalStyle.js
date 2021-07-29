import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

* {
     margin: 0;
     padding: 0;
     box-sizing: border-box;
 }

body {
    background: #1b1b1b;
}


 button {
     font-weight: bold;
     font-size: 1.1rem;
     border: 0.1rem solid #129CF3;
     border-radius: 0.3rem;
     padding: 10px 15px;
     cursor: pointer;
     background: transparent;
     color: white;
     transition: all 0.2s ease;
     letter-spacing: 0.1rem;
     &:hover {
         background: #129CF3;
         color: white;
     }

 }
     h2 {
         padding-top: 4rem;
         font-weight: lighter;
         font-size: 2rem;
     }

     h3 {
         color: white;
     }

     h4 {
         font-weight: bold;
         font-size: 2rem;

     }

     span {
         font-weight: bold;
         color: #23d997;
     }

     p{
         padding: 3rem 0rem;
         color:#ccc;
         font-size: 1.4rem;
     }

`;

export default GlobalStyle;
