import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Chatlist from "../components/chat/Chatlist";
import ReactModal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../components/layout/Layout";
import ChatFooter from "../components/footer/ChatFooter";

const Chat = () => {
  return (
    <Layout>
      <St_Header>
        <St_Title>채팅</St_Title>
        <div>
          <button>나가기</button>
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
