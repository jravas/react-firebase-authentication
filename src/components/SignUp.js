import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { auth } from "../firebase";
import * as routes from "../constants/routes";

const SignUpPage = ({ history }) => {
  return (
    <div>
      <h1>Sing Up</h1>
      <SignUpForm history={history} />
    </div>
  );
};

const INITIAL_STATE = {
  username: "",
  email: "",
  passwordOne: "",
  passwordTwo: "",
  error: null
};

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value
});

class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }
  onSubmit = event => {
    const { email, passwordOne } = this.state;
    const { history } = this.props;
    auth
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        this.setState(() => ({ ...INITIAL_STATE }));
        history.push(routes.HOME);
      })
      .catch(error => {
        this.setState(byPropKey("error", error));
      });
    event.preventDefault();
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
                this.setState(byPropKey("username", event.target.value))
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
              onChange={event =>
                this.setState(byPropKey("email", event.target.value))
              }
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
                this.setState(byPropKey("passwordOne", event.target.value))
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
                this.setState(byPropKey("passwordTwo", event.target.value))
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

const SignUpLink = () => {
  return (
    <div>
      <p>Don't have account ?</p>
      <Link to={routes.SIGN_UP}>Singn Up</Link>
    </div>
  );
};

export default withRouter(SignUpPage);

export { SignUpForm, SignUpLink };
