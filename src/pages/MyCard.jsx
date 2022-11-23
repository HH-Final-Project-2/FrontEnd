import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import Mycarditem from '../components/myCard/MycardItem';
import MyCardNoneItem from '../components/myCard/MyCardNoneItem';
import MyProfile from '../components/myCard/MyProfile';
import MyLayout from '../components/myCard/MyLayout';
import { useDispatch, useSelector } from 'react-redux';
import { _getMakeCard } from '../redux/modules/mycardSlice';
import KakaoShare from '../components/myCard/kakaoshare/KakaoShare';
import Layout from '../components/layout/Layout';

const MyCard = () => {
  const nav = useNavigate();
  const dispatch = useDispatch();

  const cardinfo = useSelector((state) => state.cardinfo.cardinfo)[0];
  console.log('페이지', cardinfo);

  const copyHandler = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      alert('클립보드 복사');
    } catch (error) {
      alert('error 명함을 확인 해주세요');
    }
  };

  useEffect(() => {
    dispatch(_getMakeCard());
  }, [dispatch]);

  if (cardinfo === undefined) return;

  //명함이 있을 때
  if (cardinfo.id !== '') {
    return (
      <Layout>
        <St_Header>
          <St_title>내 명함</St_title>
          <button>계정관리</button>
        </St_Header>
        <MyProfile />
        <Mycarditem />
        <St_share
          onClick={() => {
            copyHandler(
              '[' +
                cardinfo.company +
                ']' +
                '\n이름 : ' +
                cardinfo.cardName +
                ' (' +
                cardinfo.position +
                ')' +
                '\n전화번호 : ' +
                cardinfo.phoneNum +
                '\n이메일 : ' +
                cardinfo.email
            );
          }}
        >
          명함내보내기
        </St_share>
        <St_Kakao>
          <KakaoShare />
          카카오톡 공유
        </St_Kakao>
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
        <MyCardNoneItem />
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
  margin: 0 auto;
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
