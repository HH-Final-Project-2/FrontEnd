import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import {
  deleteChatroom,
  getChatRoom,
  roomIdSave,
} from '../../redux/modules/chatSlice';
import { ReactComponent as Profile } from '../../images/profile.svg';

const Chatlist = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();

  const { chatRoom } = useSelector((state) => state.chat);

  useEffect(() => {
    dispatch(getChatRoom());
  }, []);

  // if (chatRoom === undefined) return;

  return (
    <div>
      {chatRoom &&
        chatRoom.map((x) => {
          return (
            <ChatsBox
              key={chatRoom.id}
              onClick={() => {
                dispatch(roomIdSave(x.chatRoomUuid));
                nav('/chat/chatroom/');
              }}
            >
              <ProBox>
                <Profile />
              </ProBox>
              <div>
                <ChatName>{x.roomName}</ChatName>
                <LastChat>{x.lastMessage}</LastChat>
              </div>
              <div className="chatSection">
                <ChatAt>오전 11:57</ChatAt>
                <ChatAlarm>1</ChatAlarm>
              </div>
              {/* <button
                onClick={(e) => {
                  e.stopPropagation();
                  dispatch(deleteChatroom(x.chatRoomUuid));
                  window.location.reload();
                }}
              >
                나가기
              </button> */}
            </ChatsBox>
          );
        })}
    </div>
  );
};
export default Chatlist;

const ChatsBox = styled.div`
display: flex;
align-items: center;

width: 373px;
height: 76px;

cursor: pointer;

.chatSection {
margin-left: 26px;
}
`;

const ProBox = styled.div`
width: 100%;
max-width: 48px;
height: 100%;
max-height: 48px;
margin-left: 16px;
`;

const ChatName = styled.h4`
width: 200px;
margin-bottom: 5px;
margin-left: 15px;

white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;

font-weight: 500;
font-size: 16px;

color: #1a1f27;
`;

const LastChat = styled.div`
width: 200px;
margin-bottom: 5px;
margin-left: 15px;
align-items: center;
font-size: 13px;

white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;

font-weight: 400;
font-size: 14px;

color: #8892a0;
`;

const ChatAt = styled.div`
font-weight: 400;
font-size: 12px;
color: #8892a0;

margin-bottom: 8px;
`;

const ChatAlarm = styled.div`
width: 20px;
height: 20px;

margin-left: auto;

border-radius: 50%;
font-weight: 400;
font-size: 12px;

display: flex;
justify-content: center;
align-items: center;

color: #ffffff;
background: #ff4b4b;
`;