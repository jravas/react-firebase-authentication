import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as actions from "../redux/actions";
import * as routes from "@/main/constants/routes";

const INITIAL_STATE = {
  email: "",
  password: "",
  error: null
};

class SignInForm extends Component {
  state = { ...INITIAL_STATE };

  handleInput = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
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
      <div className="form-container">
        <h1 className="form-container__title">Sing In</h1>
        <form className="form-container__form" onSubmit={this.onSubmit}>
          <input
            className="form-container__form__input"
            name="email"
            value={email}
            onChange={this.handleInput}
            type="text"
            placeholder="Email Address"
          />
          <input
            className="form-container__form__input"
            name="password"
            value={password}
            onChange={this.handleInput}
            type="password"
            placeholder="Password"
          />
          <button
            className="form-container__form__button default-button"
            disabled={isInvalid}
            type="submit"
          >
            Sign In
          </button>
          {!error ? null : <p>{error.message}</p>}
        </form>
      </div>
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
