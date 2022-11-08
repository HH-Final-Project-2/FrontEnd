import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router';

const MyProfile = () => {
  const nav = useNavigate();
  return (
    <St_Profile>
      <St_Patch>
        <St_Name>이름</St_Name>
        <button>수정</button>
      </St_Patch>
      <St_Info>직책/부서</St_Info>
    </St_Profile>
  );
};

export default MyProfile;

const St_Profile = styled.div`
  width: 100%;
  padding: 15px;
`;

const St_Patch = styled.div`
  display: flex;
  width: 100%;
  max-width: 360px;
  align-items: center;
  justify-content: space-between;
`;

const St_Name = styled.div`
  font-weight: 600;
`;

const St_Info = styled.div`
  display: flex;
  margin-top: 7px;
  font-size: 13px;
  font-weight: 400;
  color: gray;
`;
