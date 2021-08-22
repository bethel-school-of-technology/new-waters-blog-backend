import * as React from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";
import { isLogin } from "../utils";

const PrivateRoute = (props: any) => {
  const { component: Component, ...rest } = props;
  return (
    // Show home page only when logged in. Otherwise, redirect to sign-in page
    <Route
      {...rest}
      render={
        (props) =>
          isLogin() ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: "/sign-in", // if NOT signed in
              }}
            />
          ) 
      }
    />
  );
};

export default PrivateRoute;
