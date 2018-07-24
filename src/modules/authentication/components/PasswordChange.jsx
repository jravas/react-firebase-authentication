import React, { Component } from "react";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import * as actions from "../redux/actions";
import defaultToastConfig from "@/main/constants/defaultToastConfig";

const INITIAL_STATE = {
  passwordOne: "",
  passwordTwo: "",
  error: null,
  toastConfig: defaultToastConfig
};
class PasswordChangeForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
    this.onSubmit = this.onSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }
  onSubmit(event) {
    const { passwordOne, toastConfig } = this.state;
    const { ChangePassword } = this.props;
    ChangePassword(passwordOne).then(() => {
      this.setState({ passwordOne: "", passwordTwo: "" });
      toast(`Password changed successfully !`, toastConfig);
    });
    event.preventDefault();
  }
  handleInput(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  render() {
    const { passwordOne, passwordTwo, error } = this.state;
    const isInvalid = passwordOne !== passwordTwo || passwordOne === "";
    return (
      <div className="form-container">
        <h1 className="form-container__title">Change password</h1>
        <form className="form-container__form" onSubmit={this.onSubmit}>
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
          <button className="default-button" disabled={isInvalid} type="submit">
            Change Password
          </button>
          {error && <p>{error.message}</p>}
        </form>
      </div>
    );
  }
}
export default connect(
  null,
  actions
)(PasswordChangeForm);
