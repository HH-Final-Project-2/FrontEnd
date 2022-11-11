import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Join from "../pages/Join";
import Main from "../pages/Main";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>

        {/* 메인 테스트용 */}
        <Route path='/' element={<Main />} />


        {/* 회원가입 */}
        <Route path='/join' element={<Join />} />

        {/* 로그인 */}
        <Route path='/login' element={<Login />} />




      </Routes>
    </BrowserRouter>
  );
};

export default Router;
