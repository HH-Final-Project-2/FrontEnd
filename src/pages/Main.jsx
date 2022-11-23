import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux/es/exports';
import { signOut, withDraw } from '../redux/modules/membersSlice';
import Layout from '../components/layout/Layout';

const Main = () => {
  const nav = useNavigate();
  const dispatch = useDispatch();

  return (
    <Layout>
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
    </Layout>
  );
};

export default Main;
