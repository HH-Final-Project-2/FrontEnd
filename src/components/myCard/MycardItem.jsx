import React, { useEffect, useState } from 'react';

import styled from 'styled-components';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { _getMakeCard } from '../../redux/modules/mycardSlice';

const MycardItem = () => {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const cardinfo = useSelector((state) => state.cardinfo.cardinfo)[0];

  useEffect(() => {
    dispatch(_getMakeCard());
  }, []);

  return (
    <St_Card
      onClick={() => {
        nav('/mypage/cardinfo');
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
};

export default MycardItem;

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
