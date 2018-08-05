import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

// components
import { NavigationNonAuth } from "./NavigationNonAuth";
import { NavigationAuth } from "./NavigationAuth";

const Navigation = ({ authUser }) => (
  <header>
    {authUser ? <NavigationAuth authUser={authUser} /> : <NavigationNonAuth />}
  </header>
);

const mapStateToProps = state => ({
  authUser: state.sessionState.authUser
});

// https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/guides/blocked-updates.md
export default withRouter(connect(mapStateToProps)(Navigation));
