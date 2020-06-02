import { createGlobalStyle } from 'styled-components';

import FormularLight from './assets/fonts/Formular-Light.ttf';
import FormularMedium from './assets/fonts/Formular-Medium.ttf';
import FormularBold from './assets/fonts/Formular-Bold.ttf';

const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: 'Formular light';
    src: url(${FormularLight}) format('truetype');
  }

  @font-face {
    font-family: 'Formular medium';
    src: url(${FormularMedium}) format('truetype');
  }

  @font-face {
    font-family: 'Formular bold';
    src: url(${FormularBold}) format('truetype');
  }

  *{    
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    list-style: none;
  }

`;

export default GlobalStyle;