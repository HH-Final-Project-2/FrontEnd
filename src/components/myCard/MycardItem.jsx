import React, { useEffect, useState } from 'react';

import styled from 'styled-components';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { _getMakeCard } from '../../redux/modules/mycardSlice';

const MycardItem = () => {
  //등록한 명함 컴포넌트
  const nav = useNavigate();
  const dispatch = useDispatch();
  const cardinfo = useSelector((state) => state.cardinfo.cardinfo);
  const companyinfo = useSelector((state) => state.PostReducer.companyInfo);

  useEffect(() => {
    dispatch(_getMakeCard());
  }, [dispatch]);

  if (cardinfo === undefined) return;

  return (
    <St_Card>
      <OutLine>
        <NameBox>
          <Name>{cardinfo.cardName}</Name>
          <Position>{cardinfo.position}</Position>
        </NameBox>

        <Company>{cardinfo.company}</Company>

        <AddressBox>
          <Address>{cardinfo.companyAddress}</Address>
        </AddressBox>

        <NumBox>
          <Name>M.</Name>
          <Address2>{cardinfo.phoneNum}</Address2>
          <Name>T.</Name>
          <Address2>{cardinfo.tel}</Address2>
        </NumBox>
      </OutLine>
    </St_Card>
  );
};

export default MycardItem;

const St_Card = styled.div`
  width: 311px;
  height: 176px;
  margin: 32px auto;

  background: #ffffff;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;

  display: flex;
  flex-direction: column;
`;
const OutLine = styled.div`
  padding: 16px 0px 0px 20px;
  display: flex;
  flex-direction: column;
`;
const NameBox = styled.div`
  display: flex;
  align-items: center;
`;

const Name = styled.div`
  margin-right: 5px;
  font-weight: 500;
  font-size: 14px;

  color: #1a1f27;
`;
const NameEng = styled.div`
  margin-top: 3px;
  margin-left: 2px;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.15px;
  color: #8892a0;
`;

const Position = styled.div`
  margin-top: 1px;

  font-size: 12px;
  font-weight: 500;
  color: #8892a0;
`;

const Company = styled.div`
  max-width: 250px;
  margin-top: 60px;
  margin-bottom: 3px;

  color: #8892a0;
  font-weight: 500;
  font-size: 12px;
`;

const AddressBox = styled.div`
  display: flex;
`;

const Address = styled.div`
  max-width: 270px;
  height: 22px;

  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  color: #1a1f27;

  display: inline-block;
  align-items: center;
`;

export const Address2 = styled.div`
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  color: #1a1f27;

  display: inline-block;
  align-items: center;
  margin-right: 10px;
`;

const NumBox = styled.div`
  display: flex;
  margin-top: 10px;
  align-items: center;
`;
