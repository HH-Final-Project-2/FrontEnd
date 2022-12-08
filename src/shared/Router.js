import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Community from '../pages/Community';
import Detail from '../pages/Detail';
import Edit from '../pages/Edit';

import Main from '../pages/Main';
import CompanySearch from '../components/card/companySearch/CompanySearch';
import MainCards from '../components/card/cardPost/MainCards';
import MainCardsPut from '../components/card/cardPut/MainCardsPut';
import OtherCards from '../pages/OtherCards';
import ViewMainDetailPost from '../components/card/cardDetail/ViewMainDetailPost';

import Write from '../pages/Write';

import Cards from '../pages/Cards';
import MyCard from '../pages/MyCard';
import MyCardInfo from '../components/myCard/MyCardInfo/MyCardInfo';
import MyCardPatch from '../components/myCard/MyCardPatch/MyCardPatch';
import MyCardMake from '../components/myCard/MyCardMake/MyCardMake';
import MyCardCompanySerach from '../components/myCard/MyCardCompanySerach/MyCardCompanySerach';
import Manage from '../pages/Manage';
import MyNickName from '../components/myCard/MyProfile/MyNickName';
import Chat from '../pages/Chat';
import Chatroom from '../components/chat/Chatroom';

import Login from '../pages/Login';
import Kakao from '../pages/Kakao';
import Join from '../pages/Join';

import CommentEditPage from '../pages/CommentEditPage';
import Search from '../pages/Search';

import MySchedules from '../pages/MySchedules';
import AddSchedulesPage from '../pages/AddSchedulesPage';
import CardSearch from '../components/card/cardSearch/CardSearch';
import OtherSearchModal from '../components/card/companySearch/OtherSearchModal';
import MySchedulesDetailPage from '../pages/MySchedulesDetailPage';
import PasswordSearch from '../pages/PasswordSearch';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* 메인 */}
        <Route path="/" element={<Main />} />
        <Route path="/cards" element={<Cards />} />
        <Route path="/cardSearch" element={<CardSearch />} />
        <Route path="/otherCategory" element={<OtherCards />} />
        <Route path="/posts" element={<MainCards />} />
        <Route path="/posts/:id/put" element={<MainCardsPut />} />
        <Route path="/posts/companySearch" element={<CompanySearch />} />
        <Route
          path="/posts/companyOtherSearch"
          element={<OtherSearchModal />}
        />
        <Route path="/posts/get/:id" element={<ViewMainDetailPost />} />

        {/* 내 일정 */}
        <Route path="/mySchedules" element={<MySchedules />} />
        <Route path="/addSchedules" element={<AddSchedulesPage />} />
        <Route
          path="/mySchedulesDetail/:id"
          element={<MySchedulesDetailPage />}
        />

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
        <Route path="/mynicknamepatch/" element={<MyNickName />} />
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
        <Route path="/findPassword" element={<PasswordSearch />} />
        <Route path="/oauth/kakao" element={<Kakao />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
