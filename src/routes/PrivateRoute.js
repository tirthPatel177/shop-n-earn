import React, { useEffect } from "react";
// import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const auth = useSelector((state) => state.authenticated);
  // const dispatch = useDispatch();

  return auth?.token !== undefined ? <Outlet /> : <Navigate to="/login" />;
};
