import axios from 'axios';
import React, { useEffect } from 'react'
import LoadingPage from '../../pages/LoadingPage';
import Swal from 'sweetalert2';
const KakaoLogin = () => {
  let params = new URL(window.location.href).searchParams;
  let code = params.get('code');

  useEffect(() => {
    if (code) {
      axios.get(`https://bkyungkeem.shop/oauth/kakao?code=${code}`)
        .then((res) => {
          localStorage.setItem("authorization", res.request.getResponseHeader("authorization"));
          localStorage.setItem("refresh-Token", res.request.getResponseHeader("refresh-Token"));
          localStorage.setItem('userid', res.data.data.id);
          localStorage.setItem('nickname', res.data.data.nickname);

          Swal.fire({
            text: "Businus에 오신걸 환영합니다",
            showCancelButton: false,
            confirmButtonColor: '#5546FF',
            confirmButtonText: '확인',
            width: '300px',
          }).then((result) => {
            if (result.isConfirmed) {
              window.location.replace('/cards');
            }
          })

          // Swal.fire({
          //   text: 'Businus에 오신걸 환영합니다', showConfirmButton: false,
          //   timer: 1000,
          //   width: '300px',
          // });
          // window.location.replace('/cards');
        })
    }
  })
  return (
    <>
      <LoadingPage />
    </>
  )
}

export default KakaoLogin