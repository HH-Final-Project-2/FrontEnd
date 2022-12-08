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
import { BottomSheet } from 'react-spring-bottom-sheet';
import 'react-spring-bottom-sheet/dist/style.css';
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
  ChatExit,
} from './ChatroomStyle';

import {
  addMessage,
  chatEnter,
  deleteChatroom,
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
import { ReactComponent as Exit } from '../../images/ic-exit.svg';
import { Board } from '../myCard/SharebottomSheet/ShareBottomSheetStyle';
import Swal from 'sweetalert2';

const Chatroom = () => {
  const socket = new SockJS('https://bkyungkeem.shop/stomp/chat');
  const client = Stomp.over(socket);

  const headers = {
    Authorization: localStorage.getItem('authorization'),
    'Refresh-Token': localStorage.getItem('refresh-Token'),
  };
  const scrollRef = useRef();
  const nav = useNavigate();
  const dispatch = useDispatch();

  //게시글에서 가져오는 채팅방 ID
  const id = useSelector((state) => state.chat.roomId);
  //채팅 리스트에서 가져오는 채팅방 ID
  const chatlistid = useSelector((state) => state.chat.chatListroomId);
  //채팅방 유저 정보
  const userinfo = useSelector((state) => state.chat.userinfo);
  console.log('채팅방유저정보', userinfo);
  //이전 채팅
  const chatList = useSelector((state) => state.chat.chat);
  console.log('이전채팅내용', chatList);
  const [message, setMessage] = useState('');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    dispatch(getUserinfo(id === '' ? chatlistid : id));
    dispatch(getMessage(id === '' ? chatlistid : id));
  }, [id, chatlistid]);

  useEffect(() => {
    onConneted();
    // console.log(socket.readyState);
    return () => {
      unSubscribe();
    };
  }, []);

  useEffect(() => {
    // 현재 스크롤 위치 === scrollRef.current.scrollTop
    // 스크롤 길이 === scrollRef.current.scrollHeight
    scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [chatList]);

  const onConneted = () => {
    client.connect(headers, () => {
      setTimeout(() => {
        client.subscribe(
          `/sub/chat/room/${id === '' ? chatlistid : id}`,
          (data) => {
            // dispatch(subscribeId(data.headers.subscription));
            const newMessage = JSON.parse(data.body);
            dispatch(addMessage(newMessage));
          },
          headers
        );
        client.send(
          '/pub/chat/enter',
          headers,
          JSON.stringify({
            roomId: id === '' ? chatlistid : id,
          })
        );
      }, 100);
    });
  };

  // const subsCribe = () => {
  //   client.subscribe(
  //     `/sub/chat/room/${id === '' ? chatlistid : id}`,
  //     (data) => {
  //       // dispatch(subscribeId(data.headers.subscription));
  //       const newMessage = JSON.parse(data.body);
  //       dispatch(addMessage(newMessage));
  //     },
  //     headers
  //   );
  // };

  const unSubscribe = () => {
    client
      .subscribe(
        `/sub/chat/room/${id === '' ? chatlistid : id}`,
        (data) => {},
        headers
      )
      .unsubscribe();
    client.disconnect();
  };

  const sendMessage = () => {
    if (message.trim() === '') {
      return setMessage('');
    } else {
      client.send(
        '/pub/chat/message',
        headers,
        JSON.stringify({
          roomId: id === '' ? chatlistid : id,
          message: message,
        })
      );
    }

    setMessage('');
  };

  const handleEnterPress = (e) => {
    if (e.keyCode === 13 && e.shiftKey === false) {
      sendMessage();
    }
  };

  const disConneted = () => {
    try {
      client.disconnect(() => {
        client.unsubscribe();
      }, headers);
    } catch (error) {}
  };

  const removeCheck = () => {
    setOpen(false);
    Swal.fire({
      text: '채팅방을 나가시겠습니까?',
      showCancelButton: true,
      confirmButtonColor: '#5546FF',
      cancelButtonColor: '#BBB5FF',
      confirmButtonText: '확인',
      cancelButtonText: '취소',
      width: '300px',
    }).then((result) => {
      if (result.isConfirmed) {
        // 확인 버튼 누를시 동작
        Swal.fire({
          text: '채팅방 나가기 완료',
          width: '300px',
          timer: 1000,
          showConfirmButton: false,
        });
        dispatch(deleteChatroom(id === '' ? chatlistid : id));
        setTimeout(() => {
          nav('/chat');
        }, 100);
      }
    });
  };
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const resizeWidth = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', resizeWidth);
    return () => {
      window.removeEventListener('resize', resizeWidth);
    };
  }, []);

  // const chattime = ()=>{
  //   for (let i =0; i < chatList.length; i ++){

  //   }
  // }

  const lastAt = chatList[chatList.length - 1].createdAt.split(' ')[2];
  // const test = chatList[chatList.length - 1].createdAt.split(' ')[2];
  // console.log(test)

  if (chatList === undefined) return;

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
          <St_Title>{userinfo?.otherNickname}</St_Title>
        </div>
        <div className="headerSvg">
          <More onClick={() => setOpen(true)} />
        </div>
      </St_Header>
      {windowWidth < 1200 ? (
        <BottomSheet
          open={open}
          onDismiss={() => {
            setOpen(false);
          }}
          style={{
            '--rsbs-max-w': '375px',
            '--rsbs-ml': 'auto',
            '--rsbs-mr': 'auto',
          }}
        >
          {/* dispatch(deleteChatroom(chatList.chatRoomUuid)); */}
          <Board>
            <ChatExit
              onClick={() => {
                removeCheck();
              }}
            >
              채팅방 나가기
              <div>
                <Exit />
              </div>
            </ChatExit>
          </Board>
        </BottomSheet>
      ) : (
        <BottomSheet
          open={open}
          onDismiss={() => {
            setOpen(false);
          }}
          style={{
            '--rsbs-max-w': '375px',
            '--rsbs-ml': 'auto',
            '--rsbs-mr': '537px',
          }}
        >
          {/* dispatch(deleteChatroom(chatList.chatRoomUuid)); */}
          <Board>
            <ChatExit
              onClick={() => {
                removeCheck();
              }}
            >
              채팅방 나가기
              <div>
                <Exit />
              </div>
            </ChatExit>
          </Board>
        </BottomSheet>
      )}

      <ChatRoomBox ref={scrollRef}>
        {chatList &&
          chatList.map((chat, index) => {
            const createdAt = chat.createdAt;
            const ampm = createdAt.split(' ')[1];
            const time = createdAt.split(' ')[2];

            // let displayTime = true;

            // if (index !== chatList.length - 1) {
            //   const lastsender = chatList[index]?.userId;

            //   if (lastsender === chat[index]?.userId) {
            //     const lastTime = chatList[index]?.createdAt.split(' ')[2];

            //     if (lastTime === time) displayTime = false; // 다음 메시지와 시간이 같을 경우 false
            //   }
            // }

            // console.log(chatList[index]?.createdAt.split(' ')[2]);
            // console.log('채팅시간', chat.createdAt.split(' ')[2]);

            if (index !== chatList.length - 1) {
              //마지막 채팅 시간과 이전 채팅의 시간이 같으면 시간 안보이게
              // console.log(chat.createdAt.split(' ')[2] === lastAt);
            }

            if (chat.userId === userinfo?.myId) {
              return (
                <MyChatBox key={message.id}>
                  {index === chatList.length - 1 ? (
                    // 마지막 인덱스가 아닐때만 실행
                    // => 마지막 채팅은 무조건 시간이 보여야함
                    <MyChatTime>
                      {ampm === 'AM' ? '오전 ' + time : '오후 ' + time}
                    </MyChatTime>
                  ) : chat.createdAt.split(' ')[2] === lastAt ? (
                    <MyChatTime></MyChatTime>
                  ) : (
                    <MyChatTime>
                      {ampm === 'AM' ? '오전 ' + time : '오후 ' + time}
                    </MyChatTime>
                  )}

                  <MyChat>{chat.message}</MyChat>
                </MyChatBox>
              );
            }
            if (chat.userId !== userinfo?.myId) {
              return (
                <UserChatBox key={message.id}>
                  <UserChat>{chat.message}</UserChat>

                  <UserChatTime>
                    {ampm === 'AM' ? '오전 ' + time : '오후 ' + time}
                  </UserChatTime>
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
              <SendDmFill
                onClick={() => {
                  sendMessage();
                }}
              />
            ) : (
              <SendDm
                onClick={() => {
                  sendMessage();
                }}
              />
            )}
          </div>
        </Footer>
      </ChatRoomBox>
    </Layout>
  );
};
export default Chatroom;
