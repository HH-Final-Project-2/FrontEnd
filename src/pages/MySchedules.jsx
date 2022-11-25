import React from "react";
import MySchedulesFooter from "../components/footer/MySchedulesFooter";
import Header from "../components/header/Header";

import Layout from "../components/layout/Layout";
import MySchedulesItem from "../components/mySchedules/mySchedules/MySchedulesItem";

const MySchedules = () => {
  return (
    <Layout>
      <Header />
      <MySchedulesItem />
      <MySchedulesFooter />
    </Layout>
  );
};

export default MySchedules;
