import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Main from "../pages/Main"
import MyCard from "../pages/MyCard"

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/MyCard" element={<MyCard/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
