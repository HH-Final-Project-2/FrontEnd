import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import Layout from '../../layout/Layout';
import MyCardFooter from '../../footer/MyCardFooter';
import { ReactComponent as Icbefore } from '../../../images/ic-before.svg';
import {
  St_Header,
  St_Title,
  InputBox,
  ButtonX,
  St_value,
  Btns,
  CancelBtn,
  SaveBtn,
} from './MyNickNameStyle';
import { ReactComponent as Icx } from '../../../images/ic-x.svg';
import { useDispatch, useSelector } from 'react-redux';
import { _getProfile, _PutPorfile } from '../../../redux/modules/profileSlice';
import Swal from 'sweetalert2';

const MyNickName = () => {
  const nav = useNavigate();
  const dispatch = useDispatch();

  const profille = useSelector((state) => state.userprofile.userprofile);
  const [nickname, setNickname] = useState(profille.nickname);
  useEffect(() => {
    dispatch(_getProfile());
  }, []);

  useEffect(() => {
    setNickname(profille.nickname);
  }, [profille]);

  let checkNickname = nickname.length >= 2 && nickname.length <= 10
  let pattenrNickname = /^[가-힣|a-z|A-Z|0-9|]+$/;

  const updateHandler = () => {

    if (nickname.trim() === '') {
      Swal.fire({
        title: '닉네임을 입력해주세요.',
        showConfirmButton: false,
        timer: 1000,
        customClass: {
          popup: 'allAlret-class',
          title: 'allTitle-class',
        },
      });
      return;
    }
    if (pattenrNickname.test(nickname) === false && checkNickname) {
      Swal.fire({
        title: '올바른 형식이 아닙니다',
        showConfirmButton: false,
        timer: 1000,
        customClass: {
          popup: 'allAlret-class',
          title: 'allTitle-class',
        },
      });
      return;
    }
    if (checkNickname) {
      Swal.fire({
        title: '닉네임이 변경되었습니다',
        showConfirmButton: false,
        timer: 1000,
        customClass: {
          popup: 'allAlret-class',
          title: 'allTitle-class',
        },
      });
      dispatch(_PutPorfile({ nickname }));
      nav('/mypage');
    } else {
      Swal.fire({
        title: '닉네임은 최소2~10자 입니다',
        showConfirmButton: false,
        timer: 1000,
        customClass: {
          popup: 'allAlret-class',
          title: 'allTitle-class',
        },
      });
    }
  };
  const display = (str) => {
    if (str.length >= 1) {
      return true;
    } else {
      return false;
    }
  }

  if (profille === undefined) return;

  return (
    <Layout>

      <St_Header>
        <Icbefore
          style={{ cursor: 'pointer' }}
          onClick={() => {
            nav('/mypage');
          }}
        />
        <St_Title>닉네임 변경</St_Title>
      </St_Header>
      <InputBox>
        <St_value maxLength={10} name="nickname" value={nickname || ''} onChange={(e) => {
          setNickname(e.target.value)
        }} />
      </InputBox>
      <ButtonX>
        <Icx
          display={display(nickname) ? "block" : "none"}
          onClick={() => setNickname('')} />
      </ButtonX>
      <Btns>
        <CancelBtn onClick={() => nav('/mypage')}>취소</CancelBtn>
        <SaveBtn onClick={() => { updateHandler(); }}>
          저장
        </SaveBtn>
      </Btns>
      <MyCardFooter />
    </Layout>
  );
};
export default MyNickName;
