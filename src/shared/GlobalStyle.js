import { createGlobalStyle } from 'styled-components';
import '../App.css';

const GlobalStyle = createGlobalStyle`
  
  html,
  body {
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
  textarea,
  select{
    margin: 0;
    font-family: 'Pretendard';
    outline: none;

    :focus {
    border: 1px solid #bbb5ff;
  }
  }
    
  // Box sizing
  html{
    box-sizing: border-box;
    font-family: 'Pretendard';
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

  ::-webkit-scrollbar {
    width: 8px; /* 스크롤바의 너비 */
  }

  ::-webkit-scrollbar-thumb {
    height: 8%; /* 스크롤바의 길이 */
    background: #E2E6EF; /* 스크롤바의 색상 */
    border-radius: 10px;
  }

  ::-webkit-scrollbar-track {
     /*스크롤바 뒷 배경 색상*/
  }

  /* :root {
  --rsbs-backdrop-bg: rgba(0, 0, 0, 0.6);
  --rsbs-bg: #fff;
  --rsbs-handle-bg: hsla(0, 0%, 0%, 0.14);
  --rsbs-max-w: 375px;
  --rsbs-ml: env(safe-area-inset-left);
  --rsbs-mr: env(safe-area-inset-right);
  --rsbs-overlay-rounded: 16px;
} */
    
`;

export default GlobalStyle;
