import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import {
  deleteChatroom,
  getChatRoom,
  getMessage,
  roomIdSave,
} from '../../redux/modules/chatSlice';
import { ReactComponent as Profile } from '../../images/profile.svg';
import { ReactComponent as Icon } from '../../images/ic-icon.svg';
import { notInitialized } from 'react-redux/es/utils/useSyncExternalStore';

const Chatlist = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();

  // const chatList = useSelector((state) => state.chat.chat);
  // console.log(chatList);
  const { chatRoom } = useSelector((state) => state.chat);
  console.log(chatRoom.length);

  useEffect(() => {
    dispatch(getChatRoom());
  }, []);

  // useEffect(() => {
  //   chatRoom[0].id;
  // }, [chatRoom]);

  if (chatRoom === undefined) return;

  return (
    <div>
      {chatRoom.length === 0 ? (
        <NonChat>
          <Icon />
          <div className="text">채팅방이 없습니다.</div>
        </NonChat>
      ) : (
        <>
          {chatRoom &&
            chatRoom.map((x) => {
              return (
                <ChatsBox
                  key={x.chatRoomUuid}
                  onClick={() => {
                    dispatch(roomIdSave(x.chatRoomUuid));
                    nav('/chat/chatroom/');
                  }}
                >
                  <ProBox>
                    <Profile />
                  </ProBox>
                  <div>
                    <ChatName key={x.roomName}>{x.roomName}</ChatName>
                    <LastChat key={x.lastMessage}>{x.lastMessage}</LastChat>
                  </div>

                  <div className="chatSection">
                    <ChatAt>{x.dayBefore}</ChatAt>
                    {x.unreadCount === 0 ? (
                      <></>
                    ) : (
                      <ChatAlarm>{x.unreadCount}</ChatAlarm>
                    )}
                  </div>
                </ChatsBox>
              );
            })}
        </>
      )}
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
    margin-left: 33px;
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

const NonChat = styled.div`
  display: flex;
  margin: 250px auto;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .text {
    margin-top: 20px;
    font-weight: 400;
    font-size: 15px;
    color: #8892a0;
  }
`;
