import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../redux/actions";

const INITIAL_STATE = {
  form: {
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
    firstName: false,
    lastName: false,
    email: false,
    address: false,
    state: false,
    phone: false,
    city: false,
    zipCode: false
  }
};

class CartCheckOut extends Component {
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

  // submit order
  handleSubmit = () => {
    const { cart, CheckOutOrder } = this.props;
    const {
      firstName,
      lastName,
      email,
      address,
      state,
      phone,
      city,
      zipCode
    } = this.state.form;

    this.checkInputs();
    if (
      firstName.length &&
      lastName.length &&
      email.length &&
      address.length &&
      state.length &&
      phone.length &&
      city.length &&
      zipCode.length &&
      cart.length
    ) {
      CheckOutOrder(
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
  };

  // cart item delete
  componentDidMount() {
    const { fetchCartItems, authUser, cart } = this.props;
    // fetch cart items
    fetchCartItems(authUser, cart);
  }

  render() {
    const { errors } = this.state;
    const {
      firstName,
      lastName,
      email,
      address,
      state,
      phone,
      city,
      zipCode
    } = this.state.form;
    return (
      <div className="container-style cart-checkout">
        <h1 className="form-container__title">Delivery Info</h1>
        <form className="form-container__form">
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
            placeholder="Email"
            type="email"
            name="email"
            value={email}
            onChange={this.handleInput}
          />
          {errors.email ? (
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
          <button
            className="default-button"
            type="button"
            onClick={this.handleSubmit}
          >
            Checkout
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cart: state.cartState.cart,
  authUser: state.sessionState.authUser,
  total: state.cartState.cartTotal
});

export default connect(
  mapStateToProps,
  actions
)(CartCheckOut);
