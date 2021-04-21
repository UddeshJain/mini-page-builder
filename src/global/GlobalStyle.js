import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  html {
    height: 100%;
  }

  body {
    margin: 0;
    height: 100%;
  }

  body > div {
    height: 100%
  }

  h1, p {
    margin: 0;
  }
`;
