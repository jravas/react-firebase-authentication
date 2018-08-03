import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../redux/actions";

const INITIAL_STATE = {
  username: "",
  email: "",
  passwordOne: "",
  passwordTwo: ""
};
class SignUpForm extends Component {
  state = { ...INITIAL_STATE };

  handleInput = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmit = event => {
    const { username, email, passwordOne } = this.state;
    const { AddUser, cart } = this.props;
    // pass data to action
    AddUser(username, email, passwordOne, cart);
  };

  render() {
    const { username, email, passwordOne, passwordTwo } = this.state;
    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === "" ||
      passwordTwo === "" ||
      email === "" ||
      username === "";
    return (
      <div className="form-container">
        <h1 className="form-container__title">Sign Up</h1>
        <form className="form-container__form">
          <input
            type="text"
            className="form-container__form__input"
            id="username"
            aria-describedby="usernamelHelp"
            placeholder="Enter username"
            name="username"
            value={username}
            onChange={this.handleInput}
          />
          <input
            type="email"
            className="form-container__form__input"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            name="email"
            value={email}
            onChange={this.handleInput}
          />
          <input
            type="password"
            className="form-container__form__input"
            id="exampleInputPassword"
            placeholder="Password"
            name="passwordOne"
            value={passwordOne}
            onChange={this.handleInput}
          />
          <input
            type="password"
            className="form-container__form__input"
            id="exampleInputPassword1"
            placeholder="Password"
            name="passwordTwo"
            value={passwordTwo}
            onChange={this.handleInput}
          />
          <button
            disabled={isInvalid}
            type="button"
            className="default-button"
            onClick={this.onSubmit}
          >
            Submit
          </button>
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
)(SignUpForm);
