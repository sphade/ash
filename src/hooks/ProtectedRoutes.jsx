import React from "react";
import jwt from "jsonwebtoken";
import { Route, Redirect } from "react-router-dom";

const Index = ({ component: Component, ...rest }) => {
  let isExpired = false;
  const token = sessionStorage.getItem("token");
  if (token) {
    let decodedToken = jwt.decode(token, { complete: true });
    let dateNow = +new Date() / 1000;
    if (decodedToken.payload.exp < dateNow) {
      isExpired = true;
    }
  }
  if (token === null) {
    isExpired = true;
  }
  return (
    <Route
      {...rest}
      render={(props) => {
        return isExpired === false ? (
          <Component {...rest} {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        );
      }}
    />
  );
};

export default Index;
