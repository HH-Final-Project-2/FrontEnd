import React, { useEffect, useState } from 'react';

import styled from 'styled-components';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { _getMakeCard } from '../../redux/modules/mycardSlice';

const MycardItem = () => {
  //등록한 명함 컴포넌트
  const nav = useNavigate();
  const dispatch = useDispatch();
  const cardinfo = useSelector((state) => state.cardinfo.cardinfo)[0];

  useEffect(() => {
    dispatch(_getMakeCard());
  }, [dispatch]);

  if (cardinfo === undefined) return;

  return (
    <St_Card
      onClick={() => {
        nav('/mypage/cardinfo');
      }}
    >

      <OutLine>
        <NameBox>
          <Name>{cardinfo.cardName}</Name>
          <Position>{cardinfo.position}</Position>
        </NameBox>
        <NameEng>{cardinfo.engName}</NameEng>
        {/* <div>{cardinfo.email}</div> */}

        {/* <div>{cardinfo.company}</div> */}
        {/* <Position>{cardinfo.company}</Position> */}
        {/* <div>{cardinfo.department}</div> */}
        <AddressBox>
          <Name>주소</Name>
          <Address>{cardinfo.companyAddress}</Address>
        </AddressBox>
        <div
          style={{ display: 'flex', alignItems: 'center', marginTop: '8px' }}
        >
          <Name>연락처 </Name>
          <Address>{cardinfo.phoneNum}</Address>
        </div>
        {/* <div>{cardinfo.tel}</div>
      <div>{cardinfo.fax}</div> */}
      </OutLine>

    </St_Card>
  );
};

export default MycardItem;

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
  gap: 16px;
`;
const OutLine = styled.div`
  margin: 16px 20px 16px 20px;
`;
const NameBox = styled.div`
  display: flex;
  align-items: center;
`;

const Name = styled.div`
  font-size: 14px;
  font-weight: 500;
  margin-right: 5px;
  line-height: 20px;
  letter-spacing: 0.15px;
  color: #1a1f27;
`;
const NameEng = styled.div`
  margin-top: 8px;
  margin-left: 2px;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.15px;
  color: #8892a0;
`;

const Position = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: #8892a0;
`;

const AddressBox = styled.div`
  margin-top: 40px;
  display: flex;
`;

const Address = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: #8892a0;
  width: 200px;
  display: inline-block;
  align-items: center;
`;
