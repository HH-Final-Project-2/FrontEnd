import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  
  html,
  body {
    background: aliceblue;
    margin: 0;
    padding: 0;
  }
  p,
  ol,
  ul,
  li,
  dl,
  dt,
  dd,
  blockquote,
  figure,
  fieldset,
  legend,
  textarea,
  pre,
  iframe,
  hr,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6{
    margin: 0;
    padding: 0;
  }

  // List
  ul{
      list-style: none;
  }

  // Form
  button,
  input,
  select{
    margin: 0;
  }
    
  // Box sizing
  html{
    box-sizing: border-box;
    font-family: segoe-ui;
  }
    
  *{
    &,
    &::before,
    &::after
      {
        box-sizing: inherit;
      }
  }

  // Media
  img,
  video{
    height: auto;
    max-width: 100%;
  }

  // Iframe
  iframe{
    border: 0;
  }
    
  // Table
  table{
    border-collapse: collapse;
    border-spacing: 0;
  }

  td,
  th{
    padding: 0;
  }

  a{
    text-decoration: none;
  }

  :root {
  --rsbs-backdrop-bg: rgba(0, 0, 0, 0.6);
  --rsbs-bg: #fff;
  --rsbs-handle-bg: hsla(0, 0%, 0%, 0.14);
  --rsbs-max-w: 375px;
  --rsbs-ml: env(safe-area-inset-left);
  --rsbs-mr: env(safe-area-inset-right);
  --rsbs-overlay-rounded: 16px;
}
    
`;

export default GlobalStyle;
