import React from 'react';
import styled from 'styled-components';
import Chatlist from '../components/chat/Chatlist';
import Layout from '../components/layout/Layout';
import ChatFooter from '../components/footer/ChatFooter';
import { SectionFooter } from '../components/footer/FooterStyle';
import { useEffect } from 'react';

const Chat = () => {
  return (
    <Layout>
      <St_Header>
        <St_Title>채팅</St_Title>
      </St_Header>
      <Chatlist />
      <ChatFooter />
      <SectionFooter />
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
  align-items: center;

  border-bottom: 1px solid #e2e6ef;
  margin-bottom: 15px;

  svg {
    display: flex;
    align-items: center;
    margin-right: 20px;
  }
`;
//헤더 타이틀의 의미
const St_Title = styled.div`
  font-weight: 500;
  font-size: 16px;
  width: 100%;
  max-width: 80px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: left;
  padding-left: 20px;
`;

const St_Input = styled.div`
  display: flex;
  margin: auto;
  align-items: center;
  justify-content: center;
`;
