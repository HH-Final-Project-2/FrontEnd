import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import {
  St_Profile,
  PutButton,
  St_Header,
  St_Name,
  St_Info,
} from '../MyProfile/MyProfileStyle';
import { _getProfile } from '../../../redux/modules/profileSlice';
import { _getMakeCard } from '../../../redux/modules/mycardSlice';

const MyProfile = () => {
  // 내 명함 페이지의 상단 마이프로필 컴포넌트

  const nav = useNavigate();
  const dispatch = useDispatch();
  const profille = useSelector((state) => state.userprofile.userprofile);
  const cardinfo = useSelector((state) => state.cardinfo.cardinfo);
  console.log('test', profille);

  useEffect(() => {
    dispatch(_getProfile());
    dispatch(_getMakeCard());
  }, []);

  if (profille === undefined && cardinfo === undefined) return;

  return (
    <St_Profile>
      <St_Header>
        <St_Name>{profille.nickname}</St_Name>
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
