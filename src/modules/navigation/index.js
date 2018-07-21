import React from "react";
import { connect } from "react-redux";

// components
import NavigationNonAuth from "./components/NavigationNonAuth";
import NavigationAuth from "./components/NavigationAuth";

const Navigation = ({ authUser }) => (
  <div>
    {authUser ? <NavigationAuth authUser={authUser} /> : <NavigationNonAuth />}
  </div>
);

const mapStateToProps = state => ({
  authUser: state.sessionState.authUser
});
export default connect(mapStateToProps)(Navigation);
