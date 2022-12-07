import React from 'react';
import Layout from '../components/layout/Layout';
import OtherCardsCategory from '../components/card/otherCategory/OtherCardsCategory';
import CardsFooter from '../components/footer/CardsFooter';
import { SectionFooter } from '../components/footer/FooterStyle';

const OtherCards = () => {
  return (
    <Layout>
      <OtherCardsCategory />
      <CardsFooter />
      <SectionFooter />
    </Layout>
  );
};
export default OtherCards;
