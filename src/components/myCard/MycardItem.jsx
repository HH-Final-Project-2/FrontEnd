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
  console.log(companyinfo);

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
        <NameEng>{cardinfo.engName}</NameEng>
        <Company>{cardinfo.company}</Company>
        <AddressBox>
          <Address>{cardinfo.companyAddress}</Address>
        </AddressBox>
        <NumBox
          style={{ display: 'flex', alignItems: 'center', marginTop: '8px' }}
        >
          <Name>M.</Name>
          <Address>{cardinfo.phoneNum}</Address>
          <Name>T.</Name>
          <Address>{cardinfo.tel}</Address>
        </NumBox>
        {/* <PutButton
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
        </PutButton> */}
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
  margin-top: 3px;
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

const Company = styled.div`
  margin-top: 20px;
  color: #1a1f27;
  letter-spacing: 0.15px;
  font-size: 12px;
`;

const AddressBox = styled.div`
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

const NumBox = styled.div`
  display: flex;
  margin-bottom: 16px;
`;

// const PutButton = styled.div`
//   display: flex;
//   justify-content: end;
//   /* background-color: orange; */
//   position: relative;
//   bottom: 30px;
//   left: 30px;
//   cursor: pointer;
// `;
