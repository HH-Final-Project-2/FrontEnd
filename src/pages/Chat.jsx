import React, { useState } from 'react';
import MyLayout from '../components/myCard/MyLayout';
import styled from 'styled-components';
import Chatlist from '../components/chat/Chatlist';
import ReactModal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { addChatroom } from '../redux/modules/chatSlice';
import Layout from '../components/layout/Layout';
import ChatFooter from '../components/footer/ChatFooter';

const Chat = () => {
  const [modal, setModal] = useState(false);
  const [addRoom, setAddRoom] = useState('');

  const dispatch = useDispatch();

  const handleModal = () => {
    setModal(!modal);
  };

  const chatRoom = useSelector((state) => state.chat.chatRoom);
  console.log(chatRoom);

  return (
    <Layout>
      <St_Header>
        <St_Title>채팅</St_Title>
        <div>
          <button onClick={handleModal}>채팅방 만들기</button>
          <ReactModal
            isOpen={modal}
            onRequestClose={() => setModal(false)}
            ariaHideApp={false}
            style={{
              overlay: {
                position: 'fixed',
                backgroundColor: 'rgba(255, 255, 255, 0.75)',
              },
              content: {
                margin: 'auto',
                position: 'fixed',
                width: '400px',
                height: '500px',
                border: '1px solid #ccc',
                background: '#fff',
                overflow: 'auto',
                WebkitOverflowScrolling: 'touch',
                borderRadius: '4px',
                outline: 'none',
                padding: '20px',
              },
            }}
          >
            <St_Input>
              <input
                placeholder="채팅방 이름..."
                value={addRoom}
                onChange={(e) => setAddRoom(e.target.value)}
              />
              <button
                onClick={() => {
                  dispatch(addChatroom());
                  console.log('디스페치');
                  handleModal();
                }}
              >
                생성
              </button>
            </St_Input>
          </ReactModal>
          <button>나가기</button>
        </div>
      </St_Header>
      <Chatlist></Chatlist>
      <ChatFooter />
    </Layout>
  );
};

export default Chat;

//헤더 박스 div
const St_Header = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  border-bottom: 1px solid #d6d6d6;
  justify-content: space-between;
  margin-bottom: 15px;
`;
//헤더 타이틀의 의미
const St_Title = styled.div`
  font-weight: 600;
  width: 100%;
  max-width: 80px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: left;
  padding-left: 15px;
`;

const St_Input = styled.div`
  display: flex;
  margin: auto;
  align-items: center;
  justify-content: center;
`;
