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
    ChangePassword(passwordOne).then(() => {
      this.setState({ passwordOne: "", passwordTwo: "" });
      console.log("success");
    });
    event.preventDefault();
  };
  render() {
    const { passwordOne, passwordTwo, error } = this.state;
    const isInvalid = passwordOne !== passwordTwo || passwordOne === "";
    return (
      <div className="form-container">
        <h1 className="form-container__title">Sing In</h1>
        <form className="form-container__form" onSubmit={this.onSubmit}>
          <input
            className="form-container__input"
            value={passwordOne}
            onChange={event =>
              this.setState({ passwordOne: event.target.value })
            }
            type="password"
            placeholder="New Password"
          />
          <input
            className="form-container__input"
            value={passwordTwo}
            onChange={event =>
              this.setState({ passwordTwo: event.target.value })
            }
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
