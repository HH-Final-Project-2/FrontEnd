import axios from 'axios';
import React, { useEffect } from 'react'

const KakaoLogin = () => {
  let params = new URL(window.location.href).searchParams;
  let code = params.get('code');

  useEffect(() => {
    if (code) {
      axios.get(`https://bkyungkeem.shop/oauth/kakao?code=${code}`)
        .then((res) => {
          localStorage.setItem("authorization", res.request.getResponseHeader("authorization"));
          localStorage.setItem("refresh-Token", res.request.getResponseHeader("refresh-Token"));
          localStorage.setItem('email', res.data.email);
          localStorage.setItem('nickname', res.data.nickname);
          alert('카카오로 로그인 되었습니다.');
          window.location.replace('/cards');
        })
        .catch((error) => { 
          console.log(error)
        })
    }
  }, [])
  return (
    <div></div>
  )
}

export default KakaoLogin