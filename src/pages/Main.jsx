import React from 'react';
import { useNavigate } from 'react-router';
const Main = () => {
  const nav = useNavigate();
  return (
    <button
      onClick={() => {
        nav('/MyCard');
      }}
    >
      mycard
    </button>
  );
};

export default Main;
