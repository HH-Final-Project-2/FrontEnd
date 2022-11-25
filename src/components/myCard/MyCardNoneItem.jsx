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
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14.9997 0.333496C6.89967 0.333496 0.333008 6.90016 0.333008 15.0002C0.333008 23.1002 6.89967 29.6668 14.9997 29.6668C23.0997 29.6668 29.6663 23.1002 29.6663 15.0002C29.6663 6.90016 23.0997 0.333496 14.9997 0.333496ZM16.333 20.3335C16.333 20.6871 16.1925 21.0263 15.9425 21.2763C15.6924 21.5264 15.3533 21.6668 14.9997 21.6668C14.6461 21.6668 14.3069 21.5264 14.0569 21.2763C13.8068 21.0263 13.6663 20.6871 13.6663 20.3335V16.3335H9.66634C9.31272 16.3335 8.97358 16.193 8.72353 15.943C8.47348 15.6929 8.33301 15.3538 8.33301 15.0002C8.33301 14.6465 8.47348 14.3074 8.72353 14.0574C8.97358 13.8073 9.31272 13.6668 9.66634 13.6668H13.6663V9.66683C13.6663 9.31321 13.8068 8.97407 14.0569 8.72402C14.3069 8.47397 14.6461 8.3335 14.9997 8.3335C15.3533 8.3335 15.6924 8.47397 15.9425 8.72402C16.1925 8.97407 16.333 9.31321 16.333 9.66683V13.6668H20.333C20.6866 13.6668 21.0258 13.8073 21.2758 14.0574C21.5259 14.3074 21.6663 14.6465 21.6663 15.0002C21.6663 15.3538 21.5259 15.6929 21.2758 15.943C21.0258 16.193 20.6866 16.3335 20.333 16.3335H16.333V20.3335Z"
            fill="#8892A0"
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
