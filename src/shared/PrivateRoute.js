import React from "react";
import { Navigate } from "react-router-dom";

function PrivateRoute({ access, refresh, component: Component }) {
  return access && refresh ? (
    Component
  ) : (
    <Navigate to="/login" {...alert("로그인이 필요한 페이지입니다.")} />
  );
}

export default PrivateRoute;
