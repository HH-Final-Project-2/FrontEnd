import React from 'react';
import PostDetail from '../components/community/postDetail/PostDetail';
import CommunityFooter from '../components/footer/CommunityFooter';
import { SectionFooter } from '../components/footer/FooterStyle';
import Layout from '../components/layout/Layout';

const Detail = () => {
  return (
    <Layout>
      <PostDetail />
      <CommunityFooter />
      <SectionFooter />
    </Layout>
  );
};

export default Detail;
