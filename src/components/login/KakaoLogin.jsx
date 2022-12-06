import axios from 'axios';
import React, { useEffect } from 'react';
import Loading from '../loading/Loading';

const KakaoLogin = () => {
  let params = new URL(window.location.href).searchParams;
  let code = params.get('code');

  useEffect(() => {
    if (code) {
      axios
        .get(`https://bkyungkeem.shop/oauth/kakao?code=${code}`)
        .then((res) => {
          localStorage.setItem(
            'authorization',
            res.request.getResponseHeader('authorization')
          );
          localStorage.setItem(
            'refresh-Token',
            res.request.getResponseHeader('refresh-Token')
          );
          localStorage.setItem('email', res.data.email);
          localStorage.setItem('nickname', res.data.nickname);
          window.location.replace('/cards');
        });
    }
  });
  return (
    <div>
      <Loading />
    </div>
  );
};

export default KakaoLogin;
