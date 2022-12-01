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
import {
  addMessage,
  getMessage,
  getUserinfo,
  _postId,
} from '../../redux/modules/chatSlice';
import { useDispatch, useSelector } from 'react-redux';
import { ReactComponent as Icbefore } from '../../images/ic-before.svg';
import { compose } from 'redux';

const Chatroom = () => {
  const headers = {
    Authorization: localStorage.getItem('authorization'),
    'Refresh-Token': localStorage.getItem('refresh-Token'),
  };
  const nav = useNavigate();
  const dispatch = useDispatch();
  const socket = new SockJS('http://13.124.142.195/stomp/chat');
  const client = Stomp.over(socket);

  const handleEnterPress = (e) => {
    if (e.keyCode === 13 && e.shiftKey == false) {
      sendMessage();
    }
  };

  const id = useSelector((state) => state.chat.roomId);
  const userinfo = useSelector((state) => state.chat.userinfo);
  const chatList = useSelector((state) => state.chat.chat);
  const [message, setMessage] = useState('');

  useEffect(() => {
    dispatch(getMessage(id));
    dispatch(getUserinfo(id));
    onConneted();
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

  //메시지 보내기
  const sendMessage = () => {
    client.send(
      '/pub/chat/message',
      headers,
      JSON.stringify({
        roomId: id,
        message: message,
      })
    );
    setMessage('');
  };

  if (chatList === undefined && userinfo === undefined) return;

  return (
    <Layout>
      <St_Header>
        <Icbefore
          onClick={() => {
            nav(-1);
          }}
        />
        <St_Title>채팅방이름</St_Title>
      </St_Header>

      <ChatRoomBox>
        {chatList.map((chat) => {
          if (chat.userId === userinfo.myId) {
            return (
              <MyChatBox key={message.id}>
                <MyChat>{chat.message}</MyChat>
              </MyChatBox>
            );
          }
          if (chat.userId !== userinfo.myId) {
            return (
              <UserChatBox key={message.id}>
                <UserChat>{chat.message}</UserChat>
              </UserChatBox>
            );
          }
        })}

        <Footer>
          <Input
            placeholder="채팅입력..."
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleEnterPress}
          />
          {/* <Button onClick={sendMessage}>보내기</Button> */}
        </Footer>
      </ChatRoomBox>
    </Layout>
  );
};
export default Chatroom;
