import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as actions from "../redux/actions";
import * as routes from "../../../main/constants/routes";
const INITIAL_STATE = {
  email: "",
  password: "",
  error: null
};

class SignInForm extends Component {
  state = { ...INITIAL_STATE };
  onSubmit = event => {
    const { email, password } = this.state;
    const { history, SignIn, cart } = this.props;
    // sign in action
    SignIn(email, password, cart).then(() => history.push(routes.HOME));
    event.preventDefault();
  };
  render() {
    const { email, password, error } = this.state;
    const isInvalid = password === "" || email === "";
    return (
      <form onSubmit={this.onSubmit}>
        <div className="form-group">
          <input
            className="form-control"
            value={email}
            onChange={event => this.setState({ email: event.target.value })}
            type="text"
            placeholder="Email Address"
          />
        </div>
        <div className="form-group">
          <input
            className="form-control"
            value={password}
            onChange={event => this.setState({ password: event.target.value })}
            type="password"
            placeholder="Password"
          />
        </div>
        <button className="btn btn-primary" disabled={isInvalid} type="submit">
          Sign In
        </button>
        {error && <p>{error.message}</p>}
      </form>
    );
  }
}
const mapStateToProps = state => ({
  cart: state.cartState.cart
});

export default connect(
  mapStateToProps,
  actions
)(withRouter(SignInForm));
