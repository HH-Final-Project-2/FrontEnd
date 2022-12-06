import React from 'react';
import PostWrite from '../components/community/postWrite/PostWrite';
import { SectionFooter } from '../components/footer/FooterStyle';
import Layout from '../components/layout/Layout';

const Write = () => {
  return (
    <Layout>
      <PostWrite />
      <SectionFooter />
    </Layout>
  );
};

export default Write;
