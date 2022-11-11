import React from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';

const Chatlist = () => {
  const nav = useNavigate();
  return (
    <div>
      <ChatsBox
        onClick={() => {
          nav('/chat/chatroom/');
        }}
      >
        <ProBox>
          <PorImg src="https://cdn-icons-png.flaticon.com/512/1946/1946429.png" />
        </ProBox>
        <div>
          <ChatName>김승재</ChatName>
          <LastChat>마지막 채팅</LastChat>
        </div>
      </ChatsBox>
      <ChatsBox>
        <ProBox>
          <PorImg src="https://cdn-icons-png.flaticon.com/512/1946/1946429.png" />
        </ProBox>
        <div>
          <ChatName>김승재</ChatName>
          <LastChat>마지막 채팅</LastChat>
        </div>
      </ChatsBox>
    </div>
  );
};
export default Chatlist;

const ChatsBox = styled.div`
  display: flex;
  margin: auto;
  align-items: center;
  //width: 50vw;
  width: 500px;
  height: 70px;
  cursor: pointer;
`;
const ProBox = styled.div`
  border-radius: 18px;
  width: 100%;
  max-width: 50px;
  height: 100%;
  max-height: 50px;
  margin-left: 10px;
  display: flex;
  justify-content: left;
  align-items: center;
`;
const PorImg = styled.img`
  width: 100%;
  max-width: 50px;
  height: 100%;
  max-height: 50px;
  border-radius: 18px;
`;

const ChatName = styled.h4`
  display: flex;
  margin: auto;
  margin-bottom: 5px;
  margin-left: 15px;
  align-items: center;
`;

const LastChat = styled.div`
  display: flex;
  margin: auto;
  margin-bottom: 5px;
  margin-left: 15px;
  align-items: center;
  font-size: 13px;
`;
