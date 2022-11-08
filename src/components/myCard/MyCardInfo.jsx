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
        <St_title>명함 상세</St_title>
      </St_Header>
      <hr style={{ margin: '0px' }} />
      <Mycarditem />
      <hr style={{ margin: '0px' }} />
      <St_CardInfo>
        <div>명함정보</div>
        <div>편집</div>
      </St_CardInfo>
    </MyLayout>
  );
};
export default MyCardInfo;

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

const St_Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
`;

const St_CardInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;
