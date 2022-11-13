import React from 'react';
import { useNavigate } from 'react-router';
const Main = () => {
  const nav = useNavigate();
  return (
    <div>
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
    </div>
  );

};

export default Main;
