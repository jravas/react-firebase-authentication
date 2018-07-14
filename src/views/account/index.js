import React from "react";
import { connect } from "react-redux";
import { compose } from "recompose";

// import AuthUserContext from "../../components/AuthUserContext";
import { PasswordForgetForm } from "../password-forget";
import PasswordChangeForm from "../../main/components/PasswordChange";
import withAuthorization from "../../main/components/withAuthorization";
const AccountPage = ({ authUser }) => (
  <div>
    <h1>Account: {authUser.email}</h1>
    <PasswordForgetForm />
    <PasswordChangeForm />
  </div>
);
const authCondition = authUser => !!authUser;
const mapStateToProps = state => ({
  authUser: state.sessionState.authUser
});
export default compose(
  withAuthorization(authCondition),
  connect(mapStateToProps)
)(AccountPage);
