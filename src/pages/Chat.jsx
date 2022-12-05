import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Chatlist from '../components/chat/Chatlist';
import ReactModal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import Layout from '../components/layout/Layout';
import ChatFooter from '../components/footer/ChatFooter';

const Chat = () => {
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
          {/* 나가기 svg */}
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.38452 0C1.01732 0 0.665164 0.145879 0.405517 0.405544C0.145869 0.66521 0 1.01739 0 1.38462V16.6154C0 16.9826 0.145869 17.3348 0.405517 17.5945C0.665164 17.8541 1.01732 18 1.38452 18H11.7684C11.952 18 12.1281 17.9271 12.2579 17.7972C12.3877 17.6674 12.4607 17.4913 12.4607 17.3077C12.4607 17.1241 12.3877 16.948 12.2579 16.8182C12.1281 16.6883 11.952 16.6154 11.7684 16.6154H1.38452V1.38462H11.7684C11.952 1.38462 12.1281 1.31168 12.2579 1.18184C12.3877 1.05201 12.4607 0.875919 12.4607 0.692308C12.4607 0.508696 12.3877 0.332605 12.2579 0.202772C12.1281 0.0729393 11.952 0 11.7684 0H1.38452ZM14.6815 5.39446C14.5515 5.26446 14.3752 5.19143 14.1913 5.19143C14.0075 5.19143 13.8312 5.26446 13.7012 5.39446C13.5712 5.52446 13.4982 5.70077 13.4982 5.88462C13.4982 6.06846 13.5712 6.24477 13.7012 6.37477L15.6354 8.30769H6.23034C6.04674 8.30769 5.87066 8.38063 5.74084 8.51046C5.61102 8.6403 5.53808 8.81639 5.53808 9C5.53808 9.18361 5.61102 9.3597 5.74084 9.48954C5.87066 9.61937 6.04674 9.69231 6.23034 9.69231H15.6354L13.7012 11.6252C13.5712 11.7552 13.4982 11.9315 13.4982 12.1154C13.4982 12.2992 13.5712 12.4755 13.7012 12.6055C13.8312 12.7355 14.0075 12.8086 14.1913 12.8086C14.3752 12.8086 14.5515 12.7355 14.6815 12.6055L17.7966 9.49015C17.8611 9.42585 17.9122 9.34945 17.9471 9.26534C17.982 9.18123 18 9.09106 18 9C18 8.90894 17.982 8.81877 17.9471 8.73466C17.9122 8.65055 17.8611 8.57416 17.7966 8.50985L14.6815 5.39446Z"
              fill="#52596B"
            />
          </svg>
          {/*  */}
        </div>
      </St_Header>
      <Chatlist />
      <ChatFooter />
    </Layout>
  );
};

export default Chat;

//헤더 박스 div
const St_Header = styled.div`
  height: 56px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #d6d6d6;
  justify-content: space-between;
  margin-bottom: 15px;

  svg {
    margin-right: 20px;
  }
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
  padding-left: 13px;
`;

const St_Input = styled.div`
  display: flex;
  margin: auto;
  align-items: center;
  justify-content: center;
`;
