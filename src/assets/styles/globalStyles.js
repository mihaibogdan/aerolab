import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    height: 100%;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;

    font-family: Rubik, sans-serif;
    font-size: 15px;
    line-height: 1.74;
    color: #7e7e7e;
  }

  body.video-open {
    overflow: hidden;
  }

  #root {
    height: 100%;
  }

  * {
    box-sizing: border-box;
    &:focus {
      outline: none;
    }
  }

  a,
  a:hover,
  a:focus,
  a:active {
    text-decoration: none;
  }

  ::selection {
    color: #fff;
    background-color: #5945e6;
}
`;

export default GlobalStyle;
