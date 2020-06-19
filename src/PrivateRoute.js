import React from "react";
import { Route, Redirect } from "react-router-dom";
// import { useAuth } from "./context/auth";

function PrivateRoute({ isAuthenticated, component: Component, ...rest }) {
  //   const isAuthenticated = useAuth();
  return (
    <Route
      render={(props) =>
        isAuthenticated ? <Component {...rest} /> : <Redirect to="/" />
      }
    />
  );
}

export default PrivateRoute;
