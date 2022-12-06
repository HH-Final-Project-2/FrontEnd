import React from 'react';
import Layout from '../components/layout/Layout';
import MainView from '../components/card/mainview/MainView';
import CardsFooter from '../components/footer/CardsFooter';
import { SectionFooter } from '../components/footer/FooterStyle';

const Cards = () => {
  return (
    <Layout>
      <MainView />
      <CardsFooter />
      <SectionFooter />
    </Layout>
  );
};
export default Cards;
