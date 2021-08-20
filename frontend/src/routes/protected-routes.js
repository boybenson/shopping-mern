import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";

function ProtectedRoute({ component: Component, ...restOfProps }) {
  const { userInfo } = useSelector((state) => state.auth);
  return (
    <Route
      {...restOfProps}
      render={(props) =>
        userInfo ? (
          <Component {...props} />
        ) : (
          <Redirect to="/v1/auth/signin" /> &&
          toast.error("please signin!") && <Redirect to="/v1/auth/signin" />
        )
      }
    />
  );
}

export default ProtectedRoute;
