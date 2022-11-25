import React, { useEffect } from 'react';
import Layout from '../layout/Layout';
import { useNavigate, useParams } from 'react-router';
import SockJS from 'sockjs-client';
import Stomp from 'stompjs';
import {
  St_Header,
  St_Title,
  MyChatBox,
  MyChat,
  UserChatBox,
  UserChat,
  Footer,
  Input,
  Button,
  ChatRoomBox,
  MyChatTime,
} from './ChatroomStyle';

const Chatroom = () => {
  const nav = useNavigate();

  const socket = new SockJS('http://13.124.142.195/wss/chat');
  const client = Stomp.over(socket);

  const headers = {
    Authorization: localStorage.getItem('authorization'),
    'Refresh-Token': localStorage.getItem('refresh-Token'),
  };

  const { id } = useParams();

  // useEffect(() => {
  //   onConneted();
  //   return () => {
  //     onConneted();
  //   };
  // }, []);

  // const onConneted = () => {
  //   try {
  //     client.connect(headers, () => {
  //       client.subscribe(
  //         `/sub/chat/room/${id}`,
  //         (data) => {
  //           const newMessage = JSON.parse(data.body);
  //           dispatch(addMessage(newMessage));
  //         },
  //         headers
  //       );
  //     });
  //   } catch (error) {}
  // };

  return (
    <Layout>
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
          {/* <MyChatTime>채팅시간</MyChatTime>
          <MyChat>나의 채팅</MyChat> */}

          <span>시간</span>
          <span>채팅</span>
        </MyChatBox>

        <UserChatBox>
          {/* <UserName>나는 상대방</UserName> */}
          <UserChat>상대방 채팅</UserChat>
        </UserChatBox>
        <Footer>
          <Input placeholder="채팅입력..." />
          <Button>보내기</Button>
        </Footer>
      </ChatRoomBox>
    </Layout>
  );
};
export default Chatroom;
