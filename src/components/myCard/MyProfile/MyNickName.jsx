import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import Layout from '../../layout/Layout';
import MyCardFooter from '../../footer/MyCardFooter';
import { ReactComponent as Icbefore } from '../../../images/ic-before.svg';
import { St_Header, St_Title, InputBox, ButtonX } from './MyNickNameStyle';
import { St_value } from '../MyCardPatch/MyCardPatchStyle';
import { ReactComponent as Icx } from '../../../images/ic-x.svg';
import { useDispatch, useSelector } from 'react-redux';
import { _getProfile } from '../../../redux/modules/mycardSlice';

const MyNickName = () => {
  const nav = useNavigate();
  const dispatch = useDispatch();

  const profill = useSelector((state) => state.cardinfo.userprofile);
  console.log(profill);
  const [userinfo, setUserinfo] = useState({
    nickName: profill.userinfo,
  });

  const nickName = userinfo;

  useEffect(() => {
    dispatch(_getProfile());
  }, []);

  const cancel = () => {
    setUserinfo('');
  };

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
        <St_value name="nickName" value={nickName}></St_value>
      </InputBox>
      <ButtonX onClick={cancel}>
        <Icx />
      </ButtonX>

      <MyCardFooter />
    </Layout>
  );
};
export default MyNickName;
