import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router';

const MyCardNoneItem = () => {
  const nav = useNavigate();
  return (
    <St_Card
      onClick={() => {
        nav('/mypage/cardmake');
      }}
    >
      <St_Plus>➕</St_Plus>
    </St_Card>
  );
};
export default MyCardNoneItem;

const St_Card = styled.div`
  width: 100%;
  max-width: 330px;
  height: 180px;
  background-color: #f1f1f1;
  margin: 20px auto;
  border-radius: 8px;
  padding: 8px;
  cursor: pointer;
  box-shadow: 2px 3px 0px 0px #cecece;
  display: flex;
  flex-direction: column;
`;

const St_Plus = styled.div`
  width: 100%;
  max-width: 50px;
  height: 50px;
  color: #d6d6d6;
  border: 2px solid;
  border-radius: 50px;
  margin: auto;
  align-items: center;
  display: flex;
  justify-content: center;
  font-size: 12px;
`;