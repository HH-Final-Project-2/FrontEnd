import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router';

const MyCardNoneItem = () => {
  //명함이 없을 때 내 명함 페이지에서 호출
  //명함 만드는 페이지 컴포넌트로 이동
  const nav = useNavigate();
  return (
    <St_Card
      onClick={() => {
        nav('/mypage/cardmake');
      }}
    >
      <St_Plus>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 20V12M12 12V4M12 12H20M12 12H4"
            stroke="#8892A0"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
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
  cursor: pointer;
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
  /* border: 2px solid; */
  /* border-radius: 50px; */
  margin: auto;
  align-items: center;
  display: flex;
  justify-content: center;
  font-size: 12px;
`;
