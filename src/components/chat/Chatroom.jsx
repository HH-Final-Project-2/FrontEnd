import React, { useEffect, useState, useSyncExternalStore } from 'react';
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
import { addMessage, _postId } from '../../redux/modules/chatSlice';
import { useDispatch, useSelector } from 'react-redux';

// console.log(_postId);

const Chatroom = () => {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const socket = new SockJS('http://13.124.142.195/stomp/chat');
  const client = Stomp.over(socket);
  const id = useSelector((state) => state.chat.roomId);

  const headers = {
    Authorization: localStorage.getItem('authorization'),
    'Refresh-Token': localStorage.getItem('refresh-Token'),
  };

  useEffect(() => {
    _postId();
  }, []);

  useEffect(() => {
    onConneted();
    return () => {
      onConneted();
    };
  }, [id]);

  const onConneted = () => {
    try {
      client.connect(headers, () => {
        client.subscribe(
          `/sub/chat/room/${id}`,
          (data) => {
            const newMessage = JSON.parse(data.body);
            dispatch(addMessage(newMessage));
          },
          headers
        );
      });
    } catch (error) {}
  };

  // //메시지 보내기
  // const sendMessage = () => {
  //   client.send(
  //     '/pub/chat/message',
  //     headers,
  //     JSON.stringify({
  //       type: 'TALK',
  //       memberId: users.memberId,
  //       roomId: id,
  //       message: message,
  //       sender: users.nickName,
  //       createdAt: createdAt,
  //     })
  //   );
  //   setMessage('');
  // };

  if (id === undefined) return;

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
