import React, { Component } from "react";
import { connect } from "react-redux";
// import validator from "validator";
import isEmail from "validator/lib/isEmail";
import * as actions from "../redux/actions";

const INITIAL_STATE = {
  form: {
    username: "",
    passwordOne: "",
    passwordTwo: "",
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    state: "",
    phone: "",
    city: "",
    zipCode: ""
  },
  errors: {
    username: false,
    passwordOne: false,
    passwordTwo: false,
    firstName: false,
    lastName: false,
    email: false,
    address: false,
    state: false,
    phone: false,
    city: false,
    zipCode: false,
    passwordsSame: false
  }
};
class SignUpForm extends Component {
  state = { ...INITIAL_STATE };

  // setting inputs to state
  handleInput = event => {
    this.setState({
      form: { ...this.state.form, [event.target.name]: event.target.value }
    });
  };

  // check if inputs are filled
  checkInputs = () => {
    const { form, errors } = this.state;
    let inputs = {};

    Object.keys(form).map(
      key =>
        form[key].length === 0 ? (inputs[key] = true) : (inputs[key] = false)
    );
    this.setState({ errors: { ...errors, ...inputs } });
  };

  onSubmit = event => {
    const { errors } = this.state;
    const {
      username,
      passwordOne,
      passwordTwo,
      firstName,
      lastName,
      email,
      address,
      state,
      phone,
      city,
      zipCode
    } = this.state.form;
    const { AddUser, cart } = this.props;

    this.checkInputs();
    // check if all inputs are filled
    if (
      username.length &&
      passwordOne.length &&
      passwordTwo.length &&
      firstName.length &&
      lastName.length &&
      email.length &&
      isEmail(email) &&
      address.length &&
      state.length &&
      phone.length &&
      city.length &&
      zipCode.length
    ) {
      // check if passwords are identical
      if (passwordOne !== passwordTwo) {
        this.setState({ errors: { ...errors, passwordsSame: true } });
      } else {
        this.setState({ errors: { ...errors, passwordsSame: false } });
        // pass data to action
        AddUser(
          username,
          passwordOne,
          firstName,
          lastName,
          email,
          address,
          state,
          phone,
          city,
          zipCode,
          cart
        );
      }
    }
  };

  render() {
    const { errors } = this.state;
    const {
      username,
      email,
      passwordOne,
      passwordTwo,
      firstName,
      lastName,
      address,
      state,
      phone,
      city,
      zipCode
    } = this.state.form;
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
          {errors.username ? (
            <p className="form-container__form__error">
              This field is required !
            </p>
          ) : null}
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
          {errors.email ? (
            <p className="form-container__form__error">
              This field is required !
            </p>
          ) : null}

          {!errors.email && email.length && !isEmail(email) ? (
            <p className="form-container__form__error">Not valid email !</p>
          ) : null}
          <input
            className="form-container__form__input"
            placeholder="First Name"
            type="text"
            name="firstName"
            value={firstName}
            onChange={this.handleInput}
          />
          {errors.firstName ? (
            <p className="form-container__form__error">
              This field is required !
            </p>
          ) : null}
          <input
            className="form-container__form__input"
            placeholder="Last Name"
            type="text"
            name="lastName"
            value={lastName}
            onChange={this.handleInput}
          />
          {errors.lastName ? (
            <p className="form-container__form__error">
              This field is required !
            </p>
          ) : null}
          <input
            className="form-container__form__input"
            placeholder="Address"
            type="text"
            name="address"
            value={address}
            onChange={this.handleInput}
          />
          {errors.address ? (
            <p className="form-container__form__error">
              This field is required !
            </p>
          ) : null}
          <input
            className="form-container__form__input"
            placeholder="State"
            type="text"
            name="state"
            value={state}
            onChange={this.handleInput}
          />
          {errors.state ? (
            <p className="form-container__form__error">
              This field is required !
            </p>
          ) : null}
          <input
            className="form-container__form__input"
            placeholder="Phone"
            type="number"
            name="phone"
            value={phone}
            onChange={this.handleInput}
          />
          {errors.phone ? (
            <p className="form-container__form__error">
              This field is required !
            </p>
          ) : null}
          <input
            className="form-container__form__input"
            placeholder="City"
            type="text"
            name="city"
            value={city}
            onChange={this.handleInput}
          />
          {errors.city ? (
            <p className="form-container__form__error">
              This field is required !
            </p>
          ) : null}
          <input
            className="form-container__form__input"
            placeholder="ZIP code"
            type="nuber"
            name="zipCode"
            value={zipCode}
            onChange={this.handleInput}
          />
          {errors.zipCode ? (
            <p className="form-container__form__error">
              This field is required !
            </p>
          ) : null}
          <input
            type="password"
            className="form-container__form__input"
            id="exampleInputPassword"
            placeholder="Password"
            name="passwordOne"
            value={passwordOne}
            onChange={this.handleInput}
          />
          {errors.passwordOne ? (
            <p className="form-container__form__error">
              This field is required !
            </p>
          ) : null}
          {errors.passwordsSame ? (
            <p className="form-container__form__error">
              Passwords must be identical !
            </p>
          ) : null}
          <input
            type="password"
            className="form-container__form__input"
            id="exampleInputPassword1"
            placeholder="Password"
            name="passwordTwo"
            value={passwordTwo}
            onChange={this.handleInput}
          />
          {errors.passwordTwo ? (
            <p className="form-container__form__error">
              This field is required !
            </p>
          ) : null}
          {errors.passwordsSame ? (
            <p className="form-container__form__error">
              Passwords must be identical !
            </p>
          ) : null}
          <button
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
