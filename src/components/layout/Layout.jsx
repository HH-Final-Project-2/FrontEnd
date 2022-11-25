import React from 'react';
import { DivLayout } from './LayoutStyle';

const Layout = ({ children }) => {
  return (
    <DivLayout>
      {children}
    </DivLayout>
  );
};

export default Layout;
