import React from 'react';
import styled from 'styled-components';

const MyLayout = ({ children }) => {
  //내 명함 페이지 전체 임의의 레이아웃
  return <St_Layout>{children}</St_Layout>;
};

export default MyLayout;

const St_Layout = styled.div`
  width: 100%;
  max-width: 390px;
  height: 98vh;
  border: 1px solid gray;
  border-radius: 12px;
  margin: auto;
  body {
    height: 100%;
  }
`;
