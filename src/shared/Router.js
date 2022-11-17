import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CompanySearch from "../components/main/CompanySearch";
import MainCards from "../components/main/MainCards";
import MainCardsPut from "../components/main/MainCardsPut";
import OtherCardsCategory from "../components/main/OtherCardsCategory";
import ViewMainDetailPost from "../components/main/ViewMainDetailPost";
import Main from "../pages/Main";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/otherCategory" element={<OtherCardsCategory />} />
        <Route path="/posts" element={<MainCards />} />
        <Route path="/posts/:id/put" element={<MainCardsPut />} />
        <Route path="/posts/companySearch" element={<CompanySearch />} />
        <Route path="/posts/get/:id" element={<ViewMainDetailPost />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
