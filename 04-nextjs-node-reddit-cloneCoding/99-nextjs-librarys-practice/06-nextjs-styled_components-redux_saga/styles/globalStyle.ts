import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    color: #fff;
  }

  body {
    background-color: ${({ theme }) => theme.colors.customGray02};
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default GlobalStyle;