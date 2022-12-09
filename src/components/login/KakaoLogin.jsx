import axios from 'axios';
import React, { useEffect } from 'react';
import LoadingPage from '../../pages/LoadingPage';
import Swal from 'sweetalert2';
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
          localStorage.setItem('userid', res.data.data.id);
          localStorage.setItem('nickname', res.data.data.nickname);

          window.location.replace('/cards');
        });
    }
  });
  return (
    <>
      <LoadingPage />
    </>
  );
};

export default KakaoLogin;
