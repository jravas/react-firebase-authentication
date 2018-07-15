import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as routes from "../../../main/constants/routes";
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
      <div className="container">
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              className="form-control"
              id="username"
              aria-describedby="usernamelHelp"
              placeholder="Enter username"
              value={username}
              onChange={event =>
                this.setState({ username: event.target.value })
              }
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              value={email}
              onChange={event => this.setState({ email: event.target.value })}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword"
              placeholder="Password"
              value={passwordOne}
              onChange={event =>
                this.setState({ passwordOne: event.target.value })
              }
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              value={passwordTwo}
              onChange={event =>
                this.setState({ passwordTwo: event.target.value })
              }
            />
          </div>
          <button
            disabled={isInvalid}
            type="submit"
            className="btn btn-primary"
          >
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
