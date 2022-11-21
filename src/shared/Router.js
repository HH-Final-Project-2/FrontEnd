import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Community from '../pages/Community';
import Detail from '../pages/Detail';
import Edit from '../pages/Edit';
import Main from '../pages/Main';
import Write from '../pages/Write';

import MyCard from '../pages/MyCard';
import MyCardInfo from '../components/myCard/MyCardInfo';
import MyCardPatch from '../components/myCard/MyCardPatch';
import MyCardMake from '../components/myCard/MyCardMake';
import Chat from '../pages/Chat';
import Chatroom from '../components/chat/Chatroom';

import Login from "../pages/Login";
import Join from "../pages/Join";
import CommentEditPage from '../pages/CommentEditPage';


const Router = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Main />} />

        {/* 커뮤니티 */}
        <Route path="/community" element={<Community />} />
        <Route path="/write" element={<Write />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/commentedit/:id/:cid" element={<CommentEditPage />} />


        {/* 내 명함  */}
        <Route path="/mypage" element={<MyCard />} />
        <Route path="/mypage/cardinfo" element={<MyCardInfo />} />
        <Route path="/mypage/cardmake" element={<MyCardMake />} />
        <Route path="/mypage/cardpatch" element={<MyCardPatch />} />

        {/* 채팅 */}
        <Route path="/chat" element={<Chat />} />
        <Route path="/chat/chatroom/" element={<Chatroom />} />

        {/* 회원관리(회원가입,로그인)*/}
        <Route path='/join' element={<Join />} />
        <Route path='/login' element={<Login />} />


      </Routes>
    </BrowserRouter>
  );
};

export default Router;
