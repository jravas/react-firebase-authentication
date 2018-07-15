import React from "react";
import { withRouter } from "react-router-dom";
import SignInForm from "../components/SignInForm";
import PasswordForgetLink from "../components/PasswordForgetLink";
import SignUpLink from "../components/SignUpLink";

const SignInPage = ({ history }) => (
  <div className="container">
    <h1>SignIn</h1>
    <SignInForm history={history} />
    <PasswordForgetLink />
    <SignUpLink />
  </div>
);
export default withRouter(SignInPage);
