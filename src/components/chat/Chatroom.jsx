import React, {
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
} from 'react';
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
  getChatRoom,
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
  const scrollRef = useRef();
  const nav = useNavigate();
  const dispatch = useDispatch();
  const socket = new SockJS('http://13.124.142.195/stomp/chat');
  const client = Stomp.over(socket);

  const handleEnterPress = (e) => {
    if (e.keyCode === 13 && e.shiftKey == false) {
      sendMessage();
    }
  };

  //현재 채팅방의 아이디를 가져옴
  const id = useSelector((state) => state.chat.roomId);
  console.log(id);
  //채팅방 전체를 불러옴
  // const chatRoom = useSelector((state) => state.chat.chatRoom);
  // console.log(chatRoom);
  const chatlistid = useSelector((state) => state.chat.chatListroomId);
  console.log(chatlistid);
  const userinfo = useSelector((state) => state.chat.userinfo);
  console.log(userinfo);
  const chatList = useSelector((state) => state.chat.chat);

  const [message, setMessage] = useState('');

  useEffect(() => {
    onConneted();
    return () => {
      onConneted();
    };
  }, [id, chatlistid]);

  useEffect(() => {
    window.setTimeout(() => {
      dispatch(getUserinfo(id === '' ? chatlistid : id));
      dispatch(getMessage(id === '' ? chatlistid : id));
      dispatch(getChatRoom());
    }, 200);
  }, [id, chatlistid]);

  const onConneted = () => {
    try {
      client.connect(headers, () => {
        client.subscribe(
          `/sub/chat/room/${id === '' ? chatlistid : id}`,
          (data) => {
            const newMessage = JSON.parse(data.body);
            dispatch(addMessage(newMessage));
          },
          headers
        );
      });
    } catch (error) {}
  };
  console.log(client === undefined);
  const sendMessage = () => {
    client.send(
      '/pub/chat/message',
      headers,
      JSON.stringify({
        roomId: id === '' ? chatlistid : id,
        message: message,
      })
    );
    setMessage('');
  };

  //disconnect
  const disConnected = () => {
    try {
      client.disconnect(() => {
        client.unsubscribe(`/sub/chat/room/${id === '' ? chatlistid : id}`);
      }, headers);
    } catch (error) {}
  };

  // const unSubscribe =() =>{
  //   if(client)
  // }

  useEffect(() => {
    // 현재 스크롤 위치 === scrollRef.current.scrollTop
    // 스크롤 길이 === scrollRef.current.scrollHeight
    scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [chatList]);

  if (chatList === undefined || userinfo === undefined) return;

  return (
    <Layout>
      <St_Header>
        <Icbefore
          style={{ cursor: 'pointer' }}
          onClick={() => {
            nav(-1);
          }}
        />
        <St_Title>{userinfo.otherNickname}</St_Title>
      </St_Header>

      <ChatRoomBox ref={scrollRef}>
        {chatList &&
          chatList.map((chat) => {
            const createdAt = chat.createdAt;
            const time = createdAt.split(' ');

            if (chat.userId === userinfo.myId) {
              return (
                <MyChatBox key={message.id}>
                  <MyChatTime>{time[1]}</MyChatTime>
                  <MyChat>{chat.message}</MyChat>
                </MyChatBox>
              );
            }
            if (chat.userId !== userinfo.myId) {
              return (
                <UserChatBox key={message.id}>
                  <UserChat>{chat.message}</UserChat>
                  <MyChatTime>{time[1]}</MyChatTime>
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
