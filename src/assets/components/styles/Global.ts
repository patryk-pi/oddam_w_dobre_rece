import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap');

    * {
    box-sizing: border-box;
    }

    body {

    color: ${({ theme }) => theme.colors.black};
    font-family: 'Open Sans', sans-serif;
    font-size: 1.15em;
    margin: 0;
    }

    img {
    max-width: 100%;
    }
`;

export default GlobalStyles;
