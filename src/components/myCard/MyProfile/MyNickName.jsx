import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import Layout from '../../layout/Layout';
import MyCardFooter from '../../footer/MyCardFooter';
import { ReactComponent as Icbefore } from '../../../images/ic-before.svg';
import { St_Header, St_Title, InputBox, ButtonX } from './MyNickNameStyle';
import { St_value } from '../MyCardPatch/MyCardPatchStyle';
import { ReactComponent as Icx } from '../../../images/ic-x.svg';
import { useDispatch, useSelector } from 'react-redux';
import { _getProfile, _PutPorfile } from '../../../redux/modules/profileSlice';

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
    alert(`닉네임이 ${nickname}으로 변경되었습니다.`);
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
        <St_value
          name="nickname"
          value={nickname || ''}
          onChange={onChange}
        ></St_value>
      </InputBox>
      <ButtonX onClick={cancel}>
        <Icx />
      </ButtonX>
      <div>
        <button onClick={updateHandler}>저장</button>
      </div>
      <MyCardFooter />
    </Layout>
  );
};
export default MyNickName;
