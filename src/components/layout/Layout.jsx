import React from 'react';
import Footer from '../footer/Footer';
import { DivLayout } from './LayoutStyle';

const Layout = ({ children }) => {
  return (
    <DivLayout>
      {children}
      <Footer />
    </DivLayout>
  );
};

export default Layout;
