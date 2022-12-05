import React from "react";
import { DivLayout, LayoutBox } from "./LayoutStyle";
import { ReactComponent as Banner } from "../../images/banner.svg";

const Layout = ({ children }) => {
  return (
    <LayoutBox>
      {/* <div className="banner">
        <Banner />
      </div> */}
      <DivLayout>{children}</DivLayout>
    </LayoutBox>
  );
};

export default Layout;
