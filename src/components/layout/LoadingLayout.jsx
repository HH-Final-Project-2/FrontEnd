import React, { useEffect, useState } from "react";
import {
  LayoutBox,
  DivLayout2,
} from "./LayoutStyle";

const LoadingLayout = ({ children }) => {

  return (
    <LayoutBox>
      <DivLayout2>{children}</DivLayout2>
    </LayoutBox>
  );
};

export default LoadingLayout;
