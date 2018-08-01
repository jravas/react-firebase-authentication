import React from "react";
import { connect } from "react-redux";
import PasswordChangeForm from "../authentication/components/PasswordChange";
import PasswordForgetForm from "../authentication/components/PasswordForgetForm";
const AccountPage = ({ authUser }) => (
  <div>
    <h1>Account: {authUser.email}</h1>
    <PasswordForgetForm />
    <PasswordChangeForm />
  </div>
);
const mapStateToProps = state => ({
  authUser: state.sessionState.authUser
});
export default connect(mapStateToProps)(AccountPage);
