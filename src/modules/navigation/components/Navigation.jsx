import React from "react";
import { connect } from "react-redux";

// components
import NavigationNonAuth from "./NavigationNonAuth";
import NavigationAuth from "./NavigationAuth";

const Navigation = ({ authUser }) => (
  <header>
    {authUser ? <NavigationAuth authUser={authUser} /> : <NavigationNonAuth />}
  </header>
);

const mapStateToProps = state => ({
  authUser: state.sessionState.authUser
});
export default connect(mapStateToProps)(Navigation);
