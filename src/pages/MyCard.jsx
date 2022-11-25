import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import Mycarditem from '../components/myCard/MycardItem';
import MyCardNoneItem from '../components/myCard/MyCardNoneItem';
import MyProfile from '../components/myCard/MyProfile/MyProfile';
import { useDispatch, useSelector } from 'react-redux';
import { _getMakeCard } from '../redux/modules/mycardSlice';
import KakaoShare from '../components/myCard/kakaoshare/KakaoShare';
import Layout from '../components/layout/Layout';
import BottomSheet from '../components/myCard/SharebottomSheet/ShareBottomSheet';
import MyCardFooter from '../components/footer/MyCardFooter';
import { ReactComponent as Icmanage } from '../images/ic-manage.svg';
import { ReactComponent as Icputpan } from '../images/ic-putpan.svg';
import {
  St_Header,
  St_title,
  Mycard,
  PutButton,
} from '../components/myCard/MyCardStyle';

const MyCard = () => {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const cardinfo = useSelector((state) => state.cardinfo.cardinfo);
  console.log('cardinfo', cardinfo);
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
          <Icmanage
            style={{
              cursor: 'pointer',
              marginRight: '21px',
            }}
            onClick={() => {
              nav('/manage');
            }}
          />
        </St_Header>
        <MyProfile />
        <Mycard>
          <Mycarditem />
          <PutButton
            onClick={() => {
              nav('/mypage/cardinfo');
            }}
          >
            <Icputpan />
          </PutButton>
        </Mycard>
        <BottomSheet />
        <MyCardFooter />
      </Layout>
    );
    //명함이 없을 때
  } else {
    return (
      <Layout>
        <St_Header>
          <St_title>내 명함</St_title>
          <Icmanage
            style={{
              cursor: 'pointer',
              marginRight: '21px',
            }}
            onClick={() => {
              nav('/manage');
            }}
          />
        </St_Header>
        <MyProfile />
        <Mycard>
          <MyCardNoneItem />
        </Mycard>
        <MyCardFooter />
      </Layout>
    );
  }
};
export default MyCard;
