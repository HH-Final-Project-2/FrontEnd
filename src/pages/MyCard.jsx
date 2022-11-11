import React from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import Mycarditem from '../components/myCard/MyCardItem';
import MyProfile from '../components/myCard/MyProfile';
import MyLayout from '../components/myCard/MyLayout';
import { useSelector } from 'react-redux';

const MyCard = () => {
  const nav = useNavigate();

  const cardinfo = useSelector((state) => state.mycard.cardinfo);

  if (cardinfo.length == 0) {
    return (
      <MyLayout>
        <St_Header>
          <St_title>내 명함</St_title>
          <button>계정관리</button>
        </St_Header>

        <MyProfile />
        <Mycarditem />

        <St_share>명함내보내기</St_share>
      </MyLayout>
    );
  } else {
    return (
      <MyLayout>
        <St_Header>
          <St_title>내 명함</St_title>
          <button>계정관리</button>
        </St_Header>

        <MyProfile />
        <Mycarditem cardinfo={cardinfo} />

        <St_share>명함내보내기</St_share>
      </MyLayout>
    );
  }
};

export default MyCard;

const St_Header = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  border-bottom: 1px solid #d6d6d6;
  justify-content: space-between;
`;

const St_title = styled.div`
  font-weight: 600;
  width: 100%;
  max-width: 80px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: left;
  padding-left: 15px;
`;

const St_share = styled.button`
  width: 100%;
  max-width: 150px;
  height: 50px;
  margin: 40px auto;
  background-color: white;
  border: 1px solid #e0e0e0;
  border-radius: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  font-weight: 550;
  font-size: 14px;
  cursor: pointer;
`;
