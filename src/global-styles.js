import { injectGlobal } from 'styled-components';

injectGlobal`
  html, body {
    margin: 0;
    padding: 0;
    font-size: 62.5%;
    font-family: 'Noto Sans', sans-serif;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    -moz-font-smoothing: antialiased;
    -o-font-smoothing: antialiased;
    font-smoothing: antialiased;
  }

  button:focus {
    outline: none;
  }
`;