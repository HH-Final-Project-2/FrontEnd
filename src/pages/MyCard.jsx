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
  // console.log('cardinfo', cardinfo);
  // console.log('페이지', cardinfo.id);
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
              marginRight: '21px',
            }}
            onClick={() => {
              nav('/manage');
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
          <PutButton
            onClick={() => {
              nav('/mypage/cardinfo');
            }}
          >
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_917_5555)">
                <circle cx="18" cy="18" r="18" fill="black" fillOpacity="0.5" />
                <path
                  d="M14.9131 24.8869L22.9132 16.8867L19.1133 13.0868L11.1131 21.0869C11.003 21.1972 10.9247 21.3352 10.8867 21.4864L10 26L14.5127 25.1133C14.6643 25.0754 14.8029 24.9971 14.9131 24.8869ZM25.4959 14.304C25.8187 13.9812 26 13.5433 26 13.0868C26 12.6302 25.8187 12.1923 25.4959 11.8695L24.1305 10.5041C23.8077 10.1813 23.3698 10 22.9132 10C22.4567 10 22.0188 10.1813 21.696 10.5041L20.3306 11.8695L24.1305 15.6694L25.4959 14.304Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_917_5555">
                  <rect width="36" height="36" rx="18" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </PutButton>
        </Mycard>
        <BottomSheet />
      </Layout>
    );
    //명함이 없을 때
  } else {
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
              marginRight: '20px',
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
  padding-left: 21px;
  color: #1a1f27;
`;

const Mycard = styled.div`
  width: 375px;
  height: 240px;
  background-color: #f5f5f5;
`;

const PutButton = styled.div`
  display: flex;
  justify-content: end;
  /* background-color: orange; */
  position: relative;
  bottom: 50px;
  right: 20px;
  cursor: pointer;
`;
