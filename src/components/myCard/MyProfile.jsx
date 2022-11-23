import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';

const MyProfile = () => {
  // 내 명함 페이지의 상단 마이프로필 컴포넌트

  const nav = useNavigate();
  const nickname = localStorage.getItem('nickname');
  console.log(nickname);

  const cardinfo = useSelector((state) => state.cardinfo.cardinfo);

  return (
    <St_Profile>
      <St_Header>
        <St_Name>{nickname}</St_Name>
        <PutButton>편집</PutButton>
      </St_Header>

      <St_Info>{cardinfo.position}</St_Info>
      <St_Info>{cardinfo.department}</St_Info>
    </St_Profile>
  );
};

export default MyProfile;

const St_Profile = styled.div`
  width: 100%;
  max-width: 360px;
  height: 100px;
  padding: 15px;
  /* border-bottom: 1px solid #d6d6d6; */
`;

const PutButton = styled.a`
  margin: auto;
  margin-right: 10px;
  color: #277dff;
  cursor: pointer;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.15px;
`;

const St_Header = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

const St_Name = styled.div`
  font-weight: 600;
`;

const St_Info = styled.div`
  display: inline-block;
  margin-top: 7px;
  margin-right: 7px;
  font-size: 13px;
  font-weight: 400;
  color: gray;
  background-color: #ecebeb;
  padding: 4px;
  border-radius: 5px;
  font-weight: 500;
  align-items: center;
`;
