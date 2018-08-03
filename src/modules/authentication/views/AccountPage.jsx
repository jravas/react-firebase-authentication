import React from "react";
import { connect } from "react-redux";
import { auth } from "@/main/firebase";
import PasswordChangeForm from "../components/PasswordChange";
import PasswordForgetForm from "../components/PasswordForgetForm";
const AccountPage = ({ authUser }) => (
  <div className="container-style account-page">
    <div className="account-page__content">
      <h1>Account: {authUser.email}</h1>
      <button className="default-button" type="button" onClick={auth.doSignOut}>
        Sign Out
      </button>
    </div>
    <PasswordForgetForm />
    <br />
    <PasswordChangeForm />
  </div>
);
const mapStateToProps = state => ({
  authUser: state.sessionState.authUser
});
export default connect(mapStateToProps)(AccountPage);
