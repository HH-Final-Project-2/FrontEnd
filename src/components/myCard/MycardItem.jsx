import React from 'react';
import styled from 'styled-components';

const Mycarditem = () => {
  return (
    <St_Card>
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
  max-width: 300px;
  height: 150px;
  background-color: white;
  margin: 20px auto;
  border: 1px solid;
  border-radius: 8px;
  padding: 8px;
`;

const St_Name = styled.div``;
