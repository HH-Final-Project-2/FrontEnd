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
  //이전 채팅
  const chatList = useSelector((state) => state.chat.chat);

  const [message, setMessage] = useState('');
  const [open, setOpen] = useState(false);

  //반응형 바텀시트
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

  useEffect(() => {
    dispatch(getUserinfo(id === '' ? chatlistid : id));
    dispatch(getMessage(id === '' ? chatlistid : id));
  }, [id, chatlistid]);

  useEffect(() => {
    onConneted();
    debugcall();
    return () => {
      unSubscribe();
    };
  }, []);

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
      debugcall();
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
    debugcall();
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
    debugcall();
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

  const debugcall = () => {
    client.debug = null;
  };

  const handleEnterPress = (e) => {
    if (e.keyCode === 13 && e.shiftKey === false) {
      sendMessage();
    }
  };

  const disConneted = () => {
    try {
      debugcall();
      client.disconnect(() => {
        client.unsubscribe();
      }, headers);
    } catch (error) {}
  };

  const removeCheck = () => {
    setOpen(false);
    Swal.fire({
      title: '<div class="title-wrap">채팅방을 나가시겠습니까?</div>',
      showCancelButton: true,
      confirmButtonColor: 'white',
      cancelButtonColor: 'white',
      confirmButtonText: '<div class="confirm-text">확인</div>',
      cancelButtonText: '<div class="cancel-text">취소</div>',
      customClass: {
        popup: 'login-class',
        title: 'title-class',
      },
    }).then((result) => {
      if (result.isConfirmed) {
        // 확인 버튼 누를시 동작
        Swal.fire({
          title: '채팅방 나가기 완료',
          timer: 1000,
          showConfirmButton: false,
          customClass: {
            popup: 'allAlret-class',
            title: 'allTitle-class',
          },
        });

        setTimeout(() => {
          nav('/chat');
        }, 200);
        dispatch(deleteChatroom(id === '' ? chatlistid : id));
      }
    });
  };

  useEffect(() => {
    // 현재 스크롤 위치 === scrollRef.current.scrollTop
    // 스크롤 길이 === scrollRef.current.scrollHeight
    scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [chatList]);

  // for (let i = 0; i < chatList.length; i++) {
  //   return chatList[i].createdAt.split(' ')[2], console.log(i);
  // }

  // const checktime = chatList.map((x, index) => {
  //   for (let i = 0; i < chatList.length; i++)
  //     return x.createdAt[i].split(' ')[2];
  // });
  // console.log(checktime);
  // console.log(chatList);
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
        <Board>
          <ChatExit
            onClick={() => {
              disConneted();
              dispatch(deleteChatroom(id === '' ? chatlistid : id));
              removeCheck();
            }}
          >
            나가기
            <div>
              <Exit />
            </div>
          </ChatExit>
        </Board>
      </BottomSheet>

      <ChatRoomBox ref={scrollRef}>
        {chatList &&
          chatList.map((chat, index) => {
            const createdAt = chat.createdAt;
            const ampm = createdAt.split(' ')[1];
            const time = createdAt.split(' ')[2];
            const lastAt =
              chatList[chatList.length - 1].createdAt.split(' ')[2];

            // for (let i = 0; i < chatList.length; i++) {
            //   console.log(i);
            // }

            // if (chat.userId === userinfo?.myId) {
            //   return (
            //     <MyChatBox key={message.id}>
            //       {index === chatList.length - 1 ? (
            //         // 마지막 인덱스가 아닐때만 실행
            //         // => 마지막 채팅은 무조건 시간이 보여야함
            //         <MyChatTime>
            //           {ampm === 'AM' ? '오전 ' + time : '오후 ' + time}
            //         </MyChatTime>
            //       ) : chat.createdAt.split(' ')[2] === lastAt ? (
            //         <MyChatTime></MyChatTime>
            //       ) : (
            //         <MyChatTime>
            //           {ampm === 'AM' ? '오전 ' + time : '오후 ' + time}
            //         </MyChatTime>
            //       )}

            //       <MyChat>{chat.message}</MyChat>
            //     </MyChatBox>
            //   );
            // }

            if (chat.userId === userinfo?.myId) {
              return (
                <MyChatBox key={message.id}>
                  <MyChatTime>
                    {ampm === 'AM' ? '오전 ' + time : '오후 ' + time}
                  </MyChatTime>
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
