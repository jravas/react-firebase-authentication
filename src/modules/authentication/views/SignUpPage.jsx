import React, { Component } from "react";
import SignUpForm from "../components/SignUpForm";

class SignUpPage extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <SignUpForm />
          </div>
        </div>
      </div>
    );
  }
}

export default SignUpPage;
