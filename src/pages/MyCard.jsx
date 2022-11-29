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
import { ReactComponent as Icputpan } from '../images/ic-putpan.svg';
import { ReactComponent as Icmanage } from '../images/ic-manage.svg';
import MyCardFooter from '../components/footer/MyCardFooter';

const MyCard = () => {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const cardinfo = useSelector((state) => state.cardinfo.cardinfo);

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
        <MyCardFooter />
        <BottomSheet />
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
