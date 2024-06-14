import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

    html {
      font-size: 10px;

      @media (max-width: 1720px) {
        font-size: 9px;
      }
    }

    * {
      box-sizing: border-box;
    }

    body {
      color: ${({ theme }) => theme.colors.black};
      font-family: Open Sans, sans-serif;
      overflow-x: hidden;
      margin: 0;
    }

    button {
      color: ${({ theme }) => theme.colors.black};
      font-family: Open Sans, sans-serif;
    }

    img {
      max-width: 100%;
    }

    ul {
      list-style: none;
    }

    a {
      text-decoration: none;
      color: ${({ theme }) => theme.colors.black}
    }

    button {
      display: inline-block;
      border: none;
      background-color: transparent;
    }

    h1,
    h2, 
    h3, 
    h4, 
    h5,
    h6 {
      margin: 0;
    }

    input { 
      border: none;
    }

    textarea{
      border: none;
      width: 96%;
      background-color: transparent;
      font-family: Open Sans, sans-serif;
    }
`;

export default GlobalStyles;
