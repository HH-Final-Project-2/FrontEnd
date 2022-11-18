import React from 'react';
import styled from 'styled-components';
import MyLayout from '../myCard/MyLayout';
import { useNavigate } from 'react-router';
const Chatroom = () => {
  const nav = useNavigate();

  return (
    <MyLayout>
      <St_Header>
        <button
          onClick={() => {
            nav(-1);
          }}
        >
          이전으로
        </button>
        <St_Title>채팅방이름</St_Title>
      </St_Header>

      <ChatRoomBox>
        <MyChatBox>
          <div>
            <MyChat>나의 채팅</MyChat>
          </div>
        </MyChatBox>

        <UserChatBox>
          <div>
            {/* <UserName>나는 상대방</UserName> */}
            <UserChat>상대방 채팅</UserChat>
          </div>
        </UserChatBox>

        <Footer>
          <Input placeholder="채팅입력..." />
          <Button>보내기</Button>
        </Footer>
      </ChatRoomBox>
    </MyLayout>
  );
};
export default Chatroom;
//헤더 박스 div
const St_Header = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  border-bottom: 1px solid #d6d6d6;
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

const MyChatBox = styled.div`
  display: flex;
  margin: auto;
  align-items: center;
  width: 100%;
  height: 50px;
  justify-content: end;
`;
const MyChat = styled.div`
  margin: auto;
  margin-right: 10px;
  border-radius: 8px;
  display: inline-block;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  padding: 7px;
  justify-content: right;
  background-color: #e4e4e4;
`;

const UserChatBox = styled.div`
  display: flex;
  margin: auto;
  align-items: center;
  width: 100%;
  height: 50px;
`;

// const UserName = styled.span`
//   font-size: 15px;
//   display: flex;
//   margin: auto;
//   margin-left: 10px;
//   align-items: center;
// `;

const UserChat = styled.div`
  margin: auto;
  border-radius: 8px;
  display: inline-block;
  align-items: center;
  margin-left: 10px;
  font-size: 13px;
  padding: 7px;
  color: #e0e0e0;
  background-color: #808080;
`;

const Footer = styled.div`
  width: 100%;
  max-width: 375px;
  display: flex;
  flex-direction: row;
  position: fixed;
  bottom: 105px;
`;

const Input = styled.input`
  width: 100%;
  height: 20px;
  border: none;
  border-radius: 12px;
  outline: none;
  resize: none;
  margin: 10px auto;
  align-items: center;
  padding: 5px;
  background-color: #c79797;
`;

const Button = styled.button`
  width: 100%;
  max-width: 70px;
  margin: 10px;
  border: none;
  background-color: transparent;
  color: #3659b9;
`;

const ChatRoomBox = styled.div`
  overflow-y: scroll;
  height: 100%;
  max-height: 750px;
  width: 100%;

  background-color: whitesmoke;
`;
