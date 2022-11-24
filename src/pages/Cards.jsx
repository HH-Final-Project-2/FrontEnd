import React from 'react';
import Layout from '../components/layout/Layout';
import MainView from '../components/card/MainView';
import CardsFooter from '../components/footer/CardsFooter';

const Cards = () => {
  return (
    <Layout>
      <MainView />
      <CardsFooter />
    </Layout>
  );
};
export default Cards;
