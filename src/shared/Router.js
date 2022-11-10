import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Main from "../pages/Main"
import MyCard from "../pages/MyCard"
import MyCardInfo from "../components/myCard/MyCardInfo";
import MyCardPatch from "../components/myCard/MyCardPatch"
import MyCardMake from "../components/myCard/MyCardMake";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/mypage" element={<MyCard/>} />
        <Route path="/mypage/cardinfo" element={<MyCardInfo/>} />
        <Route path="/mypage/cardmake" element={<MyCardMake/>} />
        <Route path="/mypage/cardpatch" element={<MyCardPatch/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
