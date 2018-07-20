import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as routes from "@/main/constants/routes";
import * as actions from "../redux/actions";

const INITIAL_STATE = {
  username: "",
  email: "",
  passwordOne: "",
  passwordTwo: "",
  error: null
};
class SignUpForm extends Component {
  state = { ...INITIAL_STATE };
  onSubmit = event => {
    event.preventDefault();
    const { username, email, passwordOne } = this.state;
    const { history, AddUser } = this.props;
    // pass
    AddUser(username, email, passwordOne).then(() => {
      history.push(routes.HOME);
    });
  };
  render() {
    const { username, email, passwordOne, passwordTwo, error } = this.state;
    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === "" ||
      passwordTwo === "" ||
      email === "" ||
      username === "";
    return (
      <div className="form-container">
        <h1 className="form-container__title">Sign Up</h1>
        <form className="form-container__form" onSubmit={this.onSubmit}>
          <input
            type="text"
            className="form-container__form__input"
            id="username"
            aria-describedby="usernamelHelp"
            placeholder="Enter username"
            value={username}
            onChange={event => this.setState({ username: event.target.value })}
          />
          <input
            type="email"
            className="form-container__form__input"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            value={email}
            onChange={event => this.setState({ email: event.target.value })}
          />
          <input
            type="password"
            className="form-container__form__input"
            id="exampleInputPassword"
            placeholder="Password"
            value={passwordOne}
            onChange={event =>
              this.setState({ passwordOne: event.target.value })
            }
          />
          <input
            type="password"
            className="form-container__form__input"
            id="exampleInputPassword1"
            placeholder="Password"
            value={passwordTwo}
            onChange={event =>
              this.setState({ passwordTwo: event.target.value })
            }
          />
          <button disabled={isInvalid} type="submit" className="default-button">
            Submit
          </button>
          {error && <p>{error.message} </p>}
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  actions
)(withRouter(SignUpForm));
