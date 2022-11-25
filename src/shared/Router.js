import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Community from '../pages/Community';
import Detail from '../pages/Detail';
import Edit from '../pages/Edit';

import Main from '../pages/Main';
import CompanySearch from '../components/card/companySearch/CompanySearch';
import MainCards from '../components/card/cardPost/MainCards';
import MainCardsPut from '../components/card/cardPut/MainCardsPut';
import OtherCardsCategory from '../components/card/otherCategory/OtherCardsCategory';
import ViewMainDetailPost from '../components/card/cardDetail/ViewMainDetailPost';

import Write from '../pages/Write';

import Cards from "../pages/Cards";
import MyCard from "../pages/MyCard";
import MyCardInfo from "../components/myCard/MyCardInfo/MyCardInfo";
import MyCardPatch from "../components/myCard/MyCardPatch/MyCardPatch";
import MyCardMake from "../components/myCard/MyCardMake/MyCardMake";
import MyCardCompanySerach from "../components/myCard/MyCardCompanySerach/MyCardCompanySerach";
import Manage from "../pages/Manage";
import Chat from "../pages/Chat";
import Chatroom from "../components/chat/Chatroom";

import Login from '../pages/Login';
import Join from '../pages/Join';

import CommentEditPage from '../pages/CommentEditPage';
import Search from '../pages/Search';

import PrivateRoute from "./PrivateRoute";
import MySchedules from '../pages/MySchedules';
import AddSchedulesPage from '../pages/AddSchedulesPage';


const Router = () => {
  const access = localStorage.getItem("authorization");
  const refresh = localStorage.getItem("refresh-Token");

  return (
    <BrowserRouter>
      <Routes>
        {/* 메인 */}
        <Route path="/"
          element={
            <PrivateRoute
              access={access}
              refresh={refresh}
              component={<Main />}
            />
          }
        />
        <Route path="/cards" element={<Cards />} />
        <Route path="/otherCategory" element={<OtherCardsCategory />} />
        <Route path="/posts" element={<MainCards />} />
        <Route path="/posts/:id/put" element={<MainCardsPut />} />
        <Route path="/posts/companySearch" element={<CompanySearch />} />
        <Route path="/posts/get/:id" element={<ViewMainDetailPost />} />

        {/* 내 일정 */}
        <Route path="/mySchedules" element={<MySchedules />} />
        <Route path="/addSchedules" element={<AddSchedulesPage />} />

        {/* 커뮤니티 */}
        <Route path="/community" element={<Community />} />
        <Route path="/write" element={<Write />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/commentedit/:id/:cid" element={<CommentEditPage />} />
        <Route path="/search" element={<Search />} />

        {/* 내 명함  */}
        <Route path="/manage" element={<Manage />} />
        <Route path="/mypage" element={<MyCard />} />
        <Route path="/mypage/cardinfo" element={<MyCardInfo />} />
        <Route path="/mypage/cardmake" element={<MyCardMake />} />
        <Route path="/mypage/cardpatch" element={<MyCardPatch />} />

        <Route
          path="/mypage/cardpatch/MyCardCompanySerach"
          element={<MyCardCompanySerach />}
        />

        {/* 채팅 */}
        <Route path="/chat" element={<Chat />} />
        <Route path="/chat/chatroom/" element={<Chatroom />} />

        {/* 회원관리(회원가입,로그인)*/}
        <Route path="/join" element={<Join />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
