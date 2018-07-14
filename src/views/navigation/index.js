import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import SignOutButton from "../../components/SignOut";
import * as routes from "../../constants/routes";

const Navigation = ({ authUser }) => (
  <div>{authUser ? <NavigationAuth /> : <NavigationNonAuth />}</div>
);
const NavigationAuth = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <Link className="nav-link" to={routes.LANDING}>
      Navbar
    </Link>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link className="nav-link" to={routes.PRODUCTS}>
            Products
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={routes.CATEGORIES}>
            Categories
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={routes.ACCOUNT}>
            Account
          </Link>
        </li>
      </ul>
      <SignOutButton />
    </div>
  </nav>
);

const NavigationNonAuth = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <Link className="nav-link" to={routes.LANDING}>
      Navbar
    </Link>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link className="nav-link" to={routes.LANDING}>
            Landing
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={routes.SIGN_IN}>
            Sign In
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);

const mapStateToProps = state => ({
  authUser: state.sessionState.authUser
});
export default connect(mapStateToProps)(Navigation);
