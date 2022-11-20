import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux/es/exports';
import { signOut, withDraw } from '../redux/modules/membersSlice';
import KakaoShare from '../components/myCard/kakaoshare/KakaoShare';
const Main = () => {
  const nav = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://t1.kakaocdn.net/kakao_js_sdk/2.0.1/kakao.min.js';
    script.integrity =
      'sha384-eKjgHJ9+vwU/FCSUG3nV1RKFolUXLsc6nLQ2R1tD0t4YFPCvRmkcF8saIfOZNWf/';
    script.crossOrigin = 'anonymous';
    script.async = true;

    document.body.appendChild(script);
    return () => document.body.removeChild(script);
  }, [dispatch]);

  return (
    <div>
      <button
        onClick={() => {
          nav('/cards');
        }}
      >
        명함첩
      </button>
      <button
        onClick={() => {
          nav('/mypage');
        }}
      >
        mycard
      </button>
      <button
        onClick={() => {
          nav('/chat');
        }}
      >
        채팅
      </button>
      <button
        onClick={() => {
          dispatch(signOut({}));
        }}
      >
        로그아웃
      </button>
      <button
        type="button"
        onClick={() => {
          const confirm = window.confirm('정말로 탈퇴하시겠습니까?');
          if (confirm) {
            dispatch(withDraw());
          } else {
            return;
          }
        }}
      >
        회원탈퇴
      </button>
      <KakaoShare />
    </div>
  );
};

export default Main;
