import React from "react";
import { Navigate } from "react-router-dom";

function PrivateRoute({ access, refresh, component: Component }) {
  return (access === null || access === "") && (refresh === null || refresh === "") ? (
    Component
  ) : (
    <Navigate to="/cards" />
  );
}

export default PrivateRoute;
