import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import {
  St_Profile,
  PutButton,
  St_Header,
  St_Name,
  St_Info,
} from '../MyProfile/MyProfileStyle';

const MyProfile = () => {
  // 내 명함 페이지의 상단 마이프로필 컴포넌트

  const nav = useNavigate();
  const nickname = localStorage.getItem('nickname');

  const cardinfo = useSelector((state) => state.cardinfo.cardinfo);

  return (
    <St_Profile>
      <St_Header>
        <St_Name>{nickname}</St_Name>
        <PutButton
          onClick={() => {
            nav('/mynicknamepatch');
          }}
        >
          수정
        </PutButton>
      </St_Header>

      <St_Info>{cardinfo.position}</St_Info>
      <St_Info>{cardinfo.department}</St_Info>
    </St_Profile>
  );
};

export default MyProfile;
