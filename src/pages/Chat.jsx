import React from 'react';
import MyLayout from '../components/myCard/MyLayout';
import styled from 'styled-components';
import Chatlist from '../components/chat/Chatlist';

const Chat = () => {
  return (
    <MyLayout>
      <St_Header>
        <St_Title>채팅</St_Title>
        <button>나가기</button>
      </St_Header>
      <Chatlist></Chatlist>
    </MyLayout>
  );
};

export default Chat;

//헤더 박스 div
const St_Header = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  border-bottom: 1px solid #d6d6d6;
  justify-content: space-between;
  margin-bottom: 15px;
`;
//헤더 타이틀의 의미
const St_Title = styled.div`
  font-weight: 600;
  width: 100%;
  max-width: 80px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: left;
  padding-left: 15px;
`;
