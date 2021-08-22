import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isLogin } from "../utils";

const PublicRoute = (props: any) => {
  const { component: Component, restricted, ...rest } = props;

  return (
    <Route
      {...rest}
      render={(props) =>
        isLogin() && restricted ? <Redirect to="/" /> : <Component {...props} />
      }
    />
  );
};

export default PublicRoute;
