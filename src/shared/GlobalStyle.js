import { createGlobalStyle } from 'styled-components';
import '../App.css';

const GlobalStyle = createGlobalStyle`
  
  html,
  body {
    margin: 0;
    padding: 0;
    ::-webkit-scrollbar {
    display: none;
  }
}
  .login-class {
    width: 270px;
    color: #1A1F27;
  }
  
  .title-class{
    margin-top: 9px;
    font-weight: 500;
    font-size: 17px;
    color: black;
  }

  .allAlret-class{
    width: 250px;
    border-radius: 40px;
    opacity: 0.9;
    margin-bottom: 800px;
    height: 37px;
  }
  .allTitle-class{
    position: relative;
    bottom: 4px;
    font-weight: 500;
    font-size: 16px;
    margin-bottom: auto;
  }
  .test{
    margin-top: 4px;
    font-size: 15px;
    color: red;
  }
  .title-wrap{
    position: relative;
    top: 10px;
  }

  .confirm-text {
    color: #5546FF;
  }

  .cancel-text {
    color: #8892A0;
  }

  .confirm-button {
    background: white;
    border: none;
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
`;

export default GlobalStyle;
