import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../redux/actions";

const INITIAL_STATE = {
  passwordOne: "",
  passwordTwo: "",
  error: null
};
class PasswordChangeForm extends Component {
  state = { ...INITIAL_STATE };

  onSubmit = event => {
    const { passwordOne } = this.state;
    const { ChangePassword } = this.props;
    ChangePassword(passwordOne);
    this.setState({ passwordOne: "", passwordTwo: "" });
  };

  handleInput = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { passwordOne, passwordTwo, error } = this.state;
    const isInvalid = passwordOne !== passwordTwo || passwordOne === "";
    return (
      <div className="form-container">
        <h1 className="form-container__title">Change password</h1>
        <form className="form-container__form">
          <input
            className="form-container__input"
            name="passwordOne"
            value={passwordOne}
            onChange={this.handleInput}
            type="password"
            placeholder="New Password"
          />
          <input
            className="form-container__input"
            name="passwordTwo"
            value={passwordTwo}
            onChange={this.handleInput}
            type="password"
            placeholder="Confirm New Password"
          />
          <button
            className="default-button"
            disabled={isInvalid}
            type="button"
            onClick={this.onSubmit}
          >
            Change Password
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
)(PasswordChangeForm);
