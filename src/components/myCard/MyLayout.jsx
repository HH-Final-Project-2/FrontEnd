import React from 'react';
import styled from 'styled-components';

const MyLayout = ({ children }) => {
  return <St_Layout>{children}</St_Layout>;
};

export default MyLayout;

const St_Layout = styled.div`
  width: 100%;
  max-width: 390px;
  height: 844px;
  border: 1px solid;
  margin: auto;
`;
