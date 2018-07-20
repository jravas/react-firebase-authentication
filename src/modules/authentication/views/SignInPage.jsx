import React from "react";
import { withRouter } from "react-router-dom";
import SignInForm from "../components/SignInForm";
import PasswordForgetLink from "../components/PasswordForgetLink";
import SignUpLink from "../components/SignUpLink";

const SignInPage = ({ history }) => (
  <div className="sing-in-page">
    <SignInForm history={history} />
    <div className="sing-in-page__additional">
      <PasswordForgetLink className="sing-in-page__additional__forget" />
      <SignUpLink />
    </div>
  </div>
);
export default withRouter(SignInPage);
