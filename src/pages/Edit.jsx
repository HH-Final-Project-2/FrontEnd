import React from 'react';
import PostEdit from '../components/community/postEdit/PostEdit';
import { SectionFooter } from '../components/footer/FooterStyle';
import Layout from '../components/layout/Layout';

const Edit = () => {
  return (
    <Layout>
      <PostEdit />
      <SectionFooter />
    </Layout>
  );
};

export default Edit;
