import React from 'react';
import PostList from '../components/community/postList/PostList';
import CommunityFooter from '../components/footer/CommunityFooter';
import { SectionFooter } from '../components/footer/FooterStyle';
import Layout from '../components/layout/Layout';

const Community = () => {
  return (
    <Layout>
      <PostList />
      <CommunityFooter />
      <SectionFooter />
    </Layout>
  );
};

export default Community;
