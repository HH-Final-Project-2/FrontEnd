import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router';

const Mycarditem = () => {
  const nav = useNavigate();
  return (
    <St_Card
      onClick={() => {
        nav('/mypage/cardinfo');
      }}
    >
      <div>이름</div>
      <div>직책</div>
      <div>회사명</div>
      <div>주소</div>
      <div>연락처</div>
      <div>이메일</div>
    </St_Card>
  );
};

export default Mycarditem;

const St_Card = styled.div`
  width: 100%;
  max-width: 330px;
  height: 180px;
  background-color: #b8b8b89b;
  margin: 20px auto;
  border-radius: 8px;
  padding: 8px;
  cursor: pointer;
  box-shadow: 2px 2px 0px 0px #9c9c9c;
`;

const St_Name = styled.div``;
