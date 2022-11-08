import React from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import Mycarditem from '../components/myCard/MyCardItem';
import MyProfile from '../components/myCard/MyProfile';
import MyLayout from '../components/myCard/MyLayout';

const MyCard = () => {
  const nav = useNavigate();

  return (
    <MyLayout>
      <div>
        <St_title>내 명함</St_title>
        <hr style={{ margin: '0px' }} />
      </div>

      <MyProfile />
      <hr style={{ margin: '0px', marginTop: '60px' }} />

      <div>
        <Mycarditem />
      </div>
      <St_share>명함내보내기</St_share>
    </MyLayout>
  );
};

export default MyCard;

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
  border: 1px solid gray;
  border-radius: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  font-weight: 550;
  font-size: 14px;
  cursor: pointer;
`;
