import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import {
  deleteChatroom,
  getChatRoom,
  roomIdSave,
} from '../../redux/modules/chatSlice';

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
                <PorImg src="https://cdn-icons-png.flaticon.com/512/1946/1946429.png" />
              </ProBox>
              <div>
                <ChatName>{x.roomName}</ChatName>
                <LastChat>{x.lastMessage}</LastChat>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  dispatch(deleteChatroom(x.chatRoomUuid));
                  window.location.reload();
                }}
              >
                나가기
              </button>
            </ChatsBox>
          );
        })}
    </div>
  );
};
export default Chatlist;

const ChatsBox = styled.div`
  display: flex;
  margin: auto;
  align-items: center;
  //width: 50vw;
  width: 500px;
  height: 70px;
  cursor: pointer;
`;
const ProBox = styled.div`
  border-radius: 18px;
  width: 100%;
  max-width: 50px;
  height: 100%;
  max-height: 50px;
  margin-left: 10px;
  display: flex;
  justify-content: left;
  align-items: center;
`;
const PorImg = styled.img`
  width: 100%;
  max-width: 50px;
  height: 100%;
  max-height: 50px;
  border-radius: 18px;
`;

const ChatName = styled.h4`
  display: flex;
  margin: auto;
  margin-bottom: 5px;
  margin-left: 15px;
  align-items: center;
`;

const LastChat = styled.div`
  display: flex;
  margin: auto;
  margin-bottom: 5px;
  margin-left: 15px;
  align-items: center;
  font-size: 13px;
`;
