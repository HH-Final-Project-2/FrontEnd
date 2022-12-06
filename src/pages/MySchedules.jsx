import React from 'react';
import { SectionFooter } from '../components/footer/FooterStyle';
import MySchedulesFooter from '../components/footer/MySchedulesFooter';

import Layout from '../components/layout/Layout';
import MySchedulesItem from '../components/mySchedules/mySchedules/MySchedulesItem';

const MySchedules = () => {
  return (
    <Layout>
      <MySchedulesItem />
      <MySchedulesFooter />
      <SectionFooter />
    </Layout>
  );
};

export default MySchedules;
