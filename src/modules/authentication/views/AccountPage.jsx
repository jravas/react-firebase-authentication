import React, { Component } from "react";
import { connect } from "react-redux";
import { auth } from "@/main/firebase";
import PasswordChangeForm from "../components/PasswordChange";
import PasswordForgetForm from "../components/PasswordForgetForm";
import { GetUser, UpdateUser } from "../redux/actions";

const INITIAL_STATE = {
  form: {
    firstName: "",
    lastName: "",
    address: "",
    state: "",
    phone: "",
    city: "",
    zipCode: ""
  },
  errors: {
    firstName: false,
    lastName: false,
    address: false,
    state: false,
    phone: false,
    city: false,
    zipCode: false
  }
};

class AccountPage extends Component {
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
    const { UpdateUser } = this.props;
    const {
      firstName,
      lastName,
      address,
      state,
      phone,
      city,
      zipCode
    } = this.state.form;

    this.checkInputs();
    if (
      firstName &&
      firstName.length &&
      (lastName && lastName.length) &&
      (address && address.length) &&
      (state && state.length) &&
      (phone && phone.length) &&
      (city && city.length) &&
      (zipCode && zipCode.length)
    ) {
      let data = { ...this.props.user, ...this.state.form };
      UpdateUser(data);
    }
  };

  componentDidMount() {
    const { authUser, GetUser } = this.props;
    if (authUser) {
      // get user info
      GetUser(authUser.uid);
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.user !== this.props.user) {
      // fill form with user info
      this.setState({ form: { ...this.props.user } });
    }
  }

  render() {
    const { authUser } = this.props;
    const { errors } = this.state;
    const {
      firstName,
      lastName,
      address,
      state,
      phone,
      city,
      zipCode
    } = this.state.form;
    return (
      <div className="container-style account-page">
        <div className="account-page__content">
          <div className="account-page__content__title">
            <h1>Account info: {authUser.email}</h1>
            <button
              className="default-button"
              type="button"
              onClick={auth.doSignOut}
            >
              Sign Out
            </button>
          </div>
          <form className="account-page__content__edit-form form-container__form">
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
            <button
              className="default-button"
              type="button"
              onClick={this.handleSubmit}
            >
              Edit info
            </button>
          </form>
        </div>
        <PasswordForgetForm />
        <br />
        <PasswordChangeForm />
      </div>
    );
  }
}

const actions = { GetUser, UpdateUser };

const mapStateToProps = state => ({
  authUser: state.sessionState.authUser,
  user: state.usersState.user
});

export default connect(
  mapStateToProps,
  actions
)(AccountPage);
