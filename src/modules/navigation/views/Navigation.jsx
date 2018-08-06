import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import admin from "@/main/constants/hardCodedAdmin";

// components
import { NavigationUser } from "../components/NavigationUser";
import { NavigationAuthAdmin } from "../components/NavigationAuthAdmin";

const Navigation = ({ authUser }) => (
  <header>
    {authUser && authUser.email === admin.email ? (
      <NavigationAuthAdmin />
    ) : (
      <NavigationUser />
    )}
  </header>
);

const mapStateToProps = state => ({
  authUser: state.sessionState.authUser
});

// https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/guides/blocked-updates.md
export default withRouter(connect(mapStateToProps)(Navigation));
