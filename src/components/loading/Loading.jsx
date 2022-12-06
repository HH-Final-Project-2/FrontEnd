import React from 'react';
import { Background, LoadingText } from './LoadingStyle';
import Spinner from '../../images/spinner.gif';
import Layout from '../layout/Layout';

const Loading = () => {
  return (
    <Layout>
      <Background>
        <img src={Spinner} alt="로딩중" width="5%" />
        <LoadingText>잠시만 기다려 주세요</LoadingText>
      </Background>
    </Layout>
  );
};

export default Loading;
