import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Community from '../pages/Community';
import Main from '../pages/Main';
import Write from '../pages/Write';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/community" element={<Community />} />
        <Route path="/write" element={<Write />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
