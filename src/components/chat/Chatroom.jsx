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
  UserChatTime,
  SectionWall,
} from './ChatroomStyle';
import {
  addMessage,
  getChatRoom,
  getMessage,
  getUserinfo,
  subscribeId,
  _postId,
} from '../../redux/modules/chatSlice';
import { useDispatch, useSelector } from 'react-redux';
import { ReactComponent as Icbefore } from '../../images/ic-before.svg';
import { ReactComponent as SendDm } from '../../images/sendMessage.svg';
import { ReactComponent as SendDmFill } from '../../images/sendMessageFill.svg';
import { ReactComponent as More } from '../../images/ic-more.svg';

const Chatroom = () => {
  const headers = {
    Authorization: localStorage.getItem('authorization'),
    'Refresh-Token': localStorage.getItem('refresh-Token'),
  };
  const socket = new SockJS('http://13.124.142.195/stomp/chat');
  const client = Stomp.over(socket);
  const scrollRef = useRef();
  const nav = useNavigate();
  const dispatch = useDispatch();

  //게시글에서 가져오는 채팅방 ID
  const id = useSelector((state) => state.chat.roomId);
  // console.log(id);
  //채팅 리스트에서 가져오는 채팅방 ID
  const chatlistid = useSelector((state) => state.chat.chatListroomId);
  // console.log(chatlistid);
  //채팅방 유저 정보
  const userinfo = useSelector((state) => state.chat.userinfo);
  console.log(userinfo);
  //이전 채팅
  const chatList = useSelector((state) => state.chat.chat);
  // console.log(chatList);
  // console.log(client.ws.readyState);

  const [message, setMessage] = useState('');

  // if (client.ws.readyState === 0) {
  //   setInterval(() => {
  //     console.log(client.ws.readyState);
  //   }, 500);
  // }

  const onConneted = () => {
    try {
      client.connect(headers, () => {
        // console.log(client.ws.readyState);
        // console.log(client.connected);
        if (client.ws.readyState === 1 && client.connected === true) {
          console.log(client.ws.readyState);
          return client.subscribe(
            `/sub/chat/room/${id === '' ? chatlistid : id}`,
            (data) => {
              // dispatch(subscribeId(data.headers.subscription));
              const newMessage = JSON.parse(data.body);
              dispatch(addMessage(newMessage));
            },
            headers
          );
        }
      });
    } catch (error) {}
  };

  useEffect(() => {
    onConneted();
    return () => {
      unSubscribe();
    };
  }, [id, chatlistid]);

  useEffect(() => {
    setTimeout(() => {
      dispatch(getUserinfo(id === '' ? chatlistid : id));
      dispatch(getMessage(id === '' ? chatlistid : id));
    }, 200);
  }, [id, chatlistid]);

  // const waitForConnection =(stompClient:Stomp.Client, callback :any) =>{

  // }

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

  const unSubscribe = () => {
    client
      .subscribe(
        `/sub/chat/room/${id === '' ? chatlistid : id}`,
        (data) => {},
        headers
      )
      .unsubscribe();
  };

  const handleEnterPress = (e) => {
    if (e.keyCode === 13 && e.shiftKey == false) {
      sendMessage();
    }
  };

  // function waitForConnection(callback) {
  //   setTimeout(
  //     function () {
  //       // 연결되었을 때 콜백함수 실행
  //       if (client.ws.readyState === 1) {
  //         callback();
  //         // 연결이 안 되었으면 재호출
  //       } else {
  //         waitForConnection(client, callback);
  //       }
  //     },
  //     1 // 밀리초 간격으로 실행
  //   );
  // }

  // const disConneted = () => {
  //   try {
  //     client.disconnect(() => {
  //       client.unsubscribe();
  //     }, headers);
  //   } catch (error) {}
  // };

  useEffect(() => {
    // 현재 스크롤 위치 === scrollRef.current.scrollTop
    // 스크롤 길이 === scrollRef.current.scrollHeight
    scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [chatList]);

  // if (
  //   chatList === undefined &&
  //   userinfo === undefined &&
  //   id === undefined &&
  //   chatlistid === undefined
  // )
  //   return;

  return (
    <Layout>
      <St_Header>
        <div className="headerTitle">
          <Icbefore
            style={{ cursor: 'pointer' }}
            onClick={() => {
              nav(-1);
            }}
          />
          <St_Title>{userinfo.otherNickname}</St_Title>
        </div>
        <div className="headerSvg">
          <More />
        </div>
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
                  <UserChatTime>{time[1]}</UserChatTime>
                </UserChatBox>
              );
            }
          })}
        <SectionWall />

        <Footer>
          <Input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleEnterPress}
          />
          <div className="dm">
            {message.length > 0 ? (
              <SendDmFill onClick={sendMessage} />
            ) : (
              <SendDm onClick={sendMessage} />
            )}
          </div>
        </Footer>
      </ChatRoomBox>
    </Layout>
  );
};
export default Chatroom;
