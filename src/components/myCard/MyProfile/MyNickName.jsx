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
  // console.log('test', profille);

  const [userinfo, setUserinfo] = useState({
    nickname: profille.nickname,
    id: profille.id,
  });

  const { nickname, id } = userinfo;

  const cancel = () => {
    setUserinfo('');
  };

  const onChange = (e) => {
    const { value, name } = e.target;
    setUserinfo({
      ...userinfo,
      [name]: value,
    });
  };

  // const onChange = (e) => {
  //   setUserinfo(e.target.value);
  // };

  useEffect(() => {
    dispatch(_getProfile());
  }, []);

  useEffect(() => {
    setUserinfo(profille);
  }, [profille]);

  const updateHandler = () => {
    dispatch(_PutPorfile(userinfo));
    // console.log(userinfo);
    Swal.fire({
      text: `닉네임이 ${nickname}으로 변경되었습니다`,
      showConfirmButton: false,
      timer: 1000,
      width: '300px',
    });
    nav('/mypage');
  };

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
        <St_value name="nickname" value={nickname || ''} onChange={onChange} />
      </InputBox>
      <ButtonX onClick={cancel}>
        <Icx />
      </ButtonX>
      <Btns>
        <CancelBtn onClick={() => nav('/mypage')}>취소</CancelBtn>
        <SaveBtn
          onClick={() => {
            if (nickname.trim() === '') {
              Swal.fire({
                text: '닉네임을 입력해주세요.',
                showConfirmButton: false,
                timer: 1000,
                width: '300px',
              });
              return;
            }
            updateHandler();
          }}
        >
          저장
        </SaveBtn>
      </Btns>
      <MyCardFooter />
    </Layout>
  );
};
export default MyNickName;
