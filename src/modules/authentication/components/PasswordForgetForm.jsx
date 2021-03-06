import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../redux/actions";

class PasswordForgetForm extends Component {
  state = { email: "" };

  handleInput = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmit = event => {
    const { email } = this.state;
    const { ResetPassword } = this.props;
    ResetPassword(email);
  };
  render() {
    const { email } = this.state;
    const isInvalid = email === "";
    return (
      <div className="account-form">
        <h1 className="form-container__title">Send reset password mail</h1>
        <form className="form-container__form">
          <input
            className="form-container__form__input"
            name="email"
            value={email}
            onChange={this.handleInput}
            type="email"
            placeholder="Email Address"
          />
          <button
            className="default-button"
            disabled={isInvalid}
            type="button"
            onClick={this.onSubmit}
          >
            Reset password
          </button>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  actions
)(PasswordForgetForm);
