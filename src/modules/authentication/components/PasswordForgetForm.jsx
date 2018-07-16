import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as routes from "../../../main/constants/routes";
import * as actions from "../redux/actions";

const INITIAL_STATE = {
  email: "",
  error: null
};
class PasswordForgetForm extends Component {
  state = { ...INITIAL_STATE };
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
      <form onSubmit={this.onSubmit}>
        <div className="form-group">
          <input
            className="form-control"
            value={this.state.email}
            onChange={event => this.setState({ email: event.target.value })}
            type="email"
            placeholder="Email Address"
          />
        </div>
        <div className="form-group">
          <button
            className="btn btn-primary"
            disabled={isInvalid}
            type="submit"
          >
            Reset My Password
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
)(withRouter(PasswordForgetForm));
