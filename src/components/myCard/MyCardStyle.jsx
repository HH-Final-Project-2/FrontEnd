import styled from 'styled-components';

//header
export const St_Header = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  border-bottom: 1px solid #d6d6d6;
  justify-content: space-between;
`;
//header title
export const St_title = styled.div`
  font-weight: 600;
  width: 100%;
  max-width: 80px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: left;
  padding-left: 21px;
  color: #1a1f27;
`;

export const Mycard = styled.div`
  width: 100%;
  height: 240px;
  background-color: #f5f5f5;
`;

export const PutButton = styled.div`
  display: flex;
  width: 40px;
  position: relative;
  bottom: 50px;
  left: 320px;
  cursor: pointer;
`;
