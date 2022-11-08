import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Main from "../pages/Main"
import MyCard from "../pages/MyCard"
import MyCardInfo from "../components/myCard/MyCardInfo";
import MyCardPatch from "../components/myCard/MyCardPatch"
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/mypage" element={<MyCard/>} />
        <Route path="/mypage/cardinfo" element={<MyCardInfo/>} />
        <Route path="/mypage/cardpatch" element={<MyCardPatch/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
