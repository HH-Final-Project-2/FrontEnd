import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router';

const Mycarditem = ({ cardinfo }) => {
  const nav = useNavigate();
  if (cardinfo == undefined) {
    return (
      <St_Card
        onClick={() => {
          nav('/mypage/cardmake');
        }}
      >
        <St_Plus>➕</St_Plus>
      </St_Card>
    );
    // console.log('undifined입니다');
  } else {
    return (
      <St_Card
        onClick={() => {
          nav('/mypage/cardpatch');
        }}
      >
        <div>{cardinfo.cardname}</div>
        <div>{cardinfo.engName}</div>
        <div>{cardinfo.email}</div>
        <div>{cardinfo.phoneNum}</div>
        <div>{cardinfo.company}</div>
        <div>{cardinfo.department}</div>
        <div>{cardinfo.postion}</div>
        <div>{cardinfo.tel}</div>
        <div>{cardinfo.fax}</div>
      </St_Card>
    );
  }
  // console.log(cardinfo);
};

export default Mycarditem;

const St_Card = styled.div`
  width: 100%;
  max-width: 330px;
  height: 180px;
  background-color: #f1f1f1;
  margin: 20px auto;
  border-radius: 8px;
  padding: 8px;
  cursor: pointer;
  box-shadow: 2px 3px 0px 0px #cecece;
  display: flex;
  flex-direction: column;
`;

const St_Plus = styled.div`
  width: 100%;
  max-width: 50px;
  height: 50px;
  color: #d6d6d6;
  border: 2px solid;
  border-radius: 50px;
  margin: auto;
  align-items: center;
  display: flex;
  justify-content: center;
  font-size: 12px;
`;
