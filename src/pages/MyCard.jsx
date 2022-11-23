import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import Mycarditem from '../components/myCard/MycardItem';
import MyCardNoneItem from '../components/myCard/MyCardNoneItem';
import MyProfile from '../components/myCard/MyProfile';
import { useDispatch, useSelector } from 'react-redux';
import { _getMakeCard } from '../redux/modules/mycardSlice';
import KakaoShare from '../components/myCard/kakaoshare/KakaoShare';
import Layout from '../components/layout/Layout';
import BottomSheet from '../components/myCard/SharebottomSheet/ShareBottomSheet';
const MyCard = () => {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const cardinfo = useSelector((state) => state.cardinfo.cardinfo);
  console.log('cardinfo', cardinfo);
  console.log('페이지', cardinfo.id);
  useEffect(() => {
    dispatch(_getMakeCard());
  }, [dispatch]);
  if (cardinfo === undefined) return;
  //명함이 있을 때
  if (cardinfo.id !== undefined) {
    return (
      <Layout>
        <St_Header>
          <St_title>내 명함</St_title>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              cursor: 'pointer',
              marginRight: '40px',
            }}
          >
            <path
              d="M12 1C5.928 1 1 5.928 1 12C1 18.072 5.928 23 12 23C18.072 23 23 18.072 23 12C23 5.928 18.072 1 12 1ZM12 5.4C14.123 5.4 15.85 7.127 15.85 9.25C15.85 11.373 14.123 13.1 12 13.1C9.877 13.1 8.15 11.373 8.15 9.25C8.15 7.127 9.877 5.4 12 5.4ZM12 20.8C9.767 20.8 7.127 19.898 5.246 17.632C7.17277 16.1203 9.55098 15.2987 12 15.2987C14.449 15.2987 16.8272 16.1203 18.754 17.632C16.873 19.898 14.233 20.8 12 20.8Z"
              fill="#52596B"
            />
          </svg>
        </St_Header>
        <MyProfile />
        <Mycard>
          <Mycarditem />
        </Mycard>
        {/* <St_Kakao>
          <KakaoShare />
          카카오톡 공유
        </St_Kakao> */}
        <BottomSheet />
      </Layout>
    );
    //명함이 없을 때
  } else {
    return (
      <Layout>
        <St_Header>
          <St_title>내 명함</St_title>
          <button>계정관리</button>
        </St_Header>
        <MyProfile />
        <Mycard>
          <MyCardNoneItem />
        </Mycard>
        {/*
        <St_share>명함내보내기</St_share> */}
      </Layout>
    );
  }
};
export default MyCard;
//header
const St_Header = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  border-bottom: 1px solid #d6d6d6;
  justify-content: space-between;
`;
//header title
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
//명함 내보내기 버튼
const St_share = styled.button`
  width: 100%;
  max-width: 150px;
  height: 50px;
  margin: 24px auto;
  background-color: white;
  border: 1px solid #e2e6ef;
  border-radius: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  font-weight: 550;
  font-size: 14px;
  cursor: pointer;
`;
const Share = styled.a`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.15px;
  color: #1a1f27;
`;
const Mycard = styled.div`
  width: 375px;
  height: 240px;
  background-color: #f5f5f5;
  /* justify-content: center;
  display: flex; */
`;
const St_Kakao = styled.button`
  width: 100%;
  max-width: 150px;
  height: 50px;
  margin: 20px auto;
  background-color: white;
  border: 1px solid #e0e0e0;
  border-radius: 25px;
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 5px;
  font-weight: 550;
  font-size: 14px;
  cursor: pointer;
`;
