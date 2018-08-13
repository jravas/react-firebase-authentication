import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { fetchCartItems, CheckOutOrder } from "../redux/actions";
import { GetUser } from "../../authentication/redux/actions";
import * as routes from "@/main/constants/routes";

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
    const { cart, CheckOutOrder, authUser } = this.props;
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
        cart,
        authUser
      );
    }
  };

  componentDidMount() {
    const { fetchCartItems, authUser, cart, GetUser } = this.props;
    // fetch cart items
    fetchCartItems(authUser, cart);
    if (authUser) {
      // get user info
      GetUser(authUser.uid);
    }
  }

  componentDidUpdate(prevProps) {
    const { history, cart, user } = this.props;
    if (prevProps.user !== user) {
      // fill form with user info
      this.setState({ form: { ...user } });
    }
    if (prevProps.cart !== cart) {
      if (cart.length === 0) {
        history.push(routes.CART);
      }
    }
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
          {errors.firstName && (
            <p className="form-container__form__error">
              This field is required !
            </p>
          )}
          <input
            className="form-container__form__input"
            placeholder="Last Name"
            type="text"
            name="lastName"
            value={lastName}
            onChange={this.handleInput}
          />
          {errors.lastName && (
            <p className="form-container__form__error">
              This field is required !
            </p>
          )}
          <input
            className="form-container__form__input"
            placeholder="Email"
            type="email"
            name="email"
            value={email}
            onChange={this.handleInput}
          />
          {errors.email && (
            <p className="form-container__form__error">
              This field is required !
            </p>
          )}
          <input
            className="form-container__form__input"
            placeholder="Address"
            type="text"
            name="address"
            value={address}
            onChange={this.handleInput}
          />
          {errors.address && (
            <p className="form-container__form__error">
              This field is required !
            </p>
          )}
          <input
            className="form-container__form__input"
            placeholder="State"
            type="text"
            name="state"
            value={state}
            onChange={this.handleInput}
          />
          {errors.state && (
            <p className="form-container__form__error">
              This field is required !
            </p>
          )}
          <input
            className="form-container__form__input"
            placeholder="Phone"
            type="number"
            name="phone"
            value={phone}
            onChange={this.handleInput}
          />
          {errors.phone && (
            <p className="form-container__form__error">
              This field is required !
            </p>
          )}
          <input
            className="form-container__form__input"
            placeholder="City"
            type="text"
            name="city"
            value={city}
            onChange={this.handleInput}
          />
          {errors.city && (
            <p className="form-container__form__error">
              This field is required !
            </p>
          )}
          <input
            className="form-container__form__input"
            placeholder="ZIP code"
            type="nuber"
            name="zipCode"
            value={zipCode}
            onChange={this.handleInput}
          />
          {errors.zipCode && (
            <p className="form-container__form__error">
              This field is required !
            </p>
          )}
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

const actions = { fetchCartItems, GetUser, CheckOutOrder };

const mapStateToProps = state => ({
  cart: state.cartState.cart,
  authUser: state.sessionState.authUser,
  user: state.usersState.user
});

export default connect(
  mapStateToProps,
  actions
)(withRouter(CartCheckOut));
