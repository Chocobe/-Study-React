import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-boxl;
  }

  body {
    background-color: #222;
  }
`;

export default GlobalStyle;