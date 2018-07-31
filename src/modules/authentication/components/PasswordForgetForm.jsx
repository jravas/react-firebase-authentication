import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as routes from "@/main/constants/routes";
import * as actions from "../redux/actions";

const INITIAL_STATE = {
  email: "",
  error: null
};
class PasswordForgetForm extends Component {
  state = { ...INITIAL_STATE };

  handleInput = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmit = event => {
    const { email } = this.state;
    const { history, ResetPassword } = this.props;
    event.preventDefault();
    ResetPassword(email).then(() => {
      history.push(routes.SIGN_IN);
    });
  };
  render() {
    const { email, error } = this.state;
    const isInvalid = email === "";
    return (
      <div className="form-container">
        <h1 className="form-container__title">Send password reset mail</h1>
        <form className="form-container__form" onSubmit={this.onSubmit}>
          <input
            className="form-container__form__input"
            name="email"
            value={email}
            onChange={this.handleInput}
            type="email"
            placeholder="Email Address"
          />
          <button className="default-button" disabled={isInvalid} type="submit">
            Reset password
          </button>
          {!error ? null : <p>{error.message}</p>}
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  actions
)(withRouter(PasswordForgetForm));
