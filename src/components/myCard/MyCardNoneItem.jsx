import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router';
import { ReactComponent as Icplus } from '../../images/ic-plus.svg';

const MyCardNoneItem = () => {
  //명함이 없을 때 내 명함 페이지에서 호출
  //명함 만드는 페이지 컴포넌트로 이동
  const nav = useNavigate();
  return (
    <St_Card>
      <St_Plus
        onClick={() => {
          nav('/mypage/cardmake');
        }}
      >
        <Icplus />
      </St_Plus>
    </St_Card>
  );
};
export default MyCardNoneItem;

//명함div
const St_Card = styled.div`
  width: 100%;
  max-width: 311px;
  height: 176px;
  margin: 32px;
  border-radius: 8px;
  padding: 0px;
  background-color: white;
  box-shadow: 0px 0px 5px 0px #cecece;
  display: flex;
  flex-direction: column;
`;
//플러스 표시
const St_Plus = styled.div`
  width: 100%;
  max-width: 50px;
  height: 50px;
  color: #d6d6d6;
  cursor: pointer;
  margin: auto;
  align-items: center;
  display: flex;
  justify-content: center;
  font-size: 12px;
`;
