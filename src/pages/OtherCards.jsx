import React from "react";
import Layout from "../components/layout/Layout";
import OtherCardsCategory from "../components/card/otherCategory/OtherCardsCategory";
import CardsFooter from "../components/footer/CardsFooter";

const OtherCards = () => {
  return (
    <Layout>
      <OtherCardsCategory />
      <CardsFooter />
    </Layout>
  );
};
export default OtherCards;
