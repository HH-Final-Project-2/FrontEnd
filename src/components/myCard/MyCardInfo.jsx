import React from 'react';
import styled from 'styled-components';
import MyLayout from './MyLayout';
import { useNavigate } from 'react-router';

import Mycarditem from '../myCard/MyCardItem';

const MyCardInfo = () => {
  const nav = useNavigate();
  return (
    <MyLayout>
      <St_Header>
        <button
          onClick={() => {
            nav('/mypage');
          }}
        >
          이전
        </button>
        <St_Title>명함 상세</St_Title>
      </St_Header>

      <Mycarditem />

      <St_CardInfo>
        <St_MidHeader>
          <div>명함정보</div>
          <button
            onClick={() => {
              nav('/mypage/cardpatch');
            }}
          >
            편집
          </button>
        </St_MidHeader>

        {/* 명함정보의 각 개체에 대한 div */}
        <Detail_Title_Box>
          <St_Detail_Title>연락처</St_Detail_Title>
          <St_Detail_Title>이메일</St_Detail_Title>
          <St_Detail_Title>회사</St_Detail_Title>
          <St_Detail_Title>직책</St_Detail_Title>
          <St_Detail_Title>부서</St_Detail_Title>
          <St_Detail_Title>주소</St_Detail_Title>
        </Detail_Title_Box>

        {/* 명함정보의 각 개체의 정보에 대한 div */}
        <Detail_Body_Box>
          <St_Detail_Body>010-0000-0000</St_Detail_Body>
          <St_Detail_Body>dobby@gmail.com</St_Detail_Body>
          <St_Detail_Body>ABC LAB</St_Detail_Body>
          <St_Detail_Body>주임</St_Detail_Body>
          <St_Detail_Body>관리팀</St_Detail_Body>
          <St_Detail_Body>
            123, Yeoksam-ro, Gangnam-gu, Seoul.Rep.of Korea
          </St_Detail_Body>
        </Detail_Body_Box>
        <MapBox>지도</MapBox>
      </St_CardInfo>
    </MyLayout>
  );
};
export default MyCardInfo;

//헤더 타이틀의 의미
const St_Title = styled.div`
  font-weight: 600;
  width: 100%;
  max-width: 80px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: left;
  padding-left: 15px;
`;

//헤더 박스 div
const St_Header = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  border-bottom: 1px solid #d6d6d6;
`;

//명함의 정보 body
const St_CardInfo = styled.div`
  align-items: center;
  justify-content: center;
  padding: 17px;
`;

//명함정보 Header
const St_MidHeader = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid #d6d6d6;
  padding-top: 20px;
`;

//명함 정보의 key값 박스
const Detail_Title_Box = styled.div`
  width: 45px;
  margin-top: 5px;
  display: flex;
  flex-direction: column;
  float: left;
`;

//명함 정보의 key값
const St_Detail_Title = styled.div`
  margin-top: 28px;
  color: gray;
  font-size: 14px;
`;

//명함 정보의 value값 박스
const Detail_Body_Box = styled.div`
  margin-top: 5px;
  display: flex;
  flex-direction: column;
  margin-right: 30px;
`;

//명함 정보의 value값
const St_Detail_Body = styled.div`
  margin-left: 15px;
  margin-top: 28px;
  font-size: 14px;
  align-items: center;
`;

//지도 div
const MapBox = styled.div`
  margin: 15px auto;
  border-radius: 8px;
  width: 100%;
  max-width: 300px;
  height: 180px;
  background-color: #f1f1f1;
  align-items: center;
  display: flex;
  justify-content: center;
`;
