import { createGlobalStyle } from 'styled-components';
import theme from '../theme';

const GlobalStyle = createGlobalStyle`
  * {
    border: 0;
    box-sizing: border-box;
    font-family: ${theme.fontFamily};
    margin: 0;
    outline: none !important;
    padding: 0;

    ::before,
    ::after {
      box-sizing: inherit;
    }

    ::-moz-selection {
      background-color: ${theme.colors.primary.main};
      color: ${theme.colors.white};
    }

    ::selection {
      background-color: ${theme.colors.primary.main};
      color: ${theme.colors.white};
    }
  }

  

  body,
  html {
    background-color: ${theme.colors.white};
    color: ${theme.colors.grey[5]};
    font-size: 16px;
    letter-spacing: 0.5px;
    line-height: 24px;
    -webkit-font-smoothing: antialiased;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }

  textarea {
    resize: none;
  }
`;

export default GlobalStyle;
