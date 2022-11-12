import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router';

const MyProfile = () => {
  const nav = useNavigate();
  return (
    <St_Profile>
      <St_Header>
        <St_Name>NickName</St_Name>
        <button>프로필 편집</button>
      </St_Header>
      <St_Info>직책</St_Info>
      <St_Info>부서</St_Info>
    </St_Profile>
  );
};

export default MyProfile;

const St_Profile = styled.div`
  width: 100%;
  max-width: 360px;
  height: 100px;
  padding: 15px;
  border-bottom: 1px solid #d6d6d6;
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
  padding: 3px;
  border-radius: 5px;
  font-weight: 500;
  align-items: center;
`;
