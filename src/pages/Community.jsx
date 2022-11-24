import React from 'react';
import PostList from '../components/community/postList/PostList';
import CommunityFooter from '../components/footer/CommunityFooter';
import Layout from '../components/layout/Layout';

const Community = () => {
  return (
    <Layout>
      <PostList />
      <CommunityFooter />
    </Layout>
  );
};

export default Community;
