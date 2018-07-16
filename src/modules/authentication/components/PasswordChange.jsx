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
      <form onSubmit={this.onSubmit}>
        <div className="form-group">
          <input
            className="form-control"
            value={passwordOne}
            onChange={event =>
              this.setState({ passwordOne: event.target.value })
            }
            type="password"
            placeholder="New Password"
          />
        </div>
        <div className="form-group">
          <input
            className="form-control"
            value={passwordTwo}
            onChange={event =>
              this.setState({ passwordTwo: event.target.value })
            }
            type="password"
            placeholder="Confirm New Password"
          />
        </div>
        <div className="form-group">
          <button
            className="btn btn-primary"
            disabled={isInvalid}
            type="submit"
          >
            Change Password
          </button>
        </div>
        {error && <p>{error.message}</p>}
      </form>
    );
  }
}
export default connect(
  null,
  actions
)(PasswordChangeForm);
