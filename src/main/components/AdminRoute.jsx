import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import admin from "../constants/hardCodedAdmin";

const AdminRoute = ({ component: Component, authUser, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        authUser !== null && authUser.email === admin.email ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
};

const mapStateToProps = state => ({
  authUser: state.sessionState.authUser
});
export default connect(mapStateToProps)(AdminRoute);
