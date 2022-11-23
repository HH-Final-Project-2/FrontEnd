import React from "react";
import Footer from "../components/footer/Footer";
import Layout from "../components/layout/Layout";
import MySchedulesItem from "../components/mySchedules/MySchedulesItem";

const MySchedules = () => {
  return (
    <Layout>
      <MySchedulesItem />
      <Footer />
    </Layout>
  );
};

export default MySchedules;
