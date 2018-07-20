import React from "react";
import { connect } from "react-redux";
import { compose } from "recompose";
import PasswordChangeForm from "../authentication/components/PasswordChange";
import PasswordForgetForm from "../authentication/components/PasswordForgetForm";
import withAuthorization from "@/main/components/withAuthorization";
const AccountPage = ({ authUser }) => (
  <div className="container">
    <div className="row">
      <div className="col">
        <h1>Account: {authUser.email}</h1>
        <PasswordForgetForm />
        <PasswordChangeForm />
      </div>
    </div>
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
