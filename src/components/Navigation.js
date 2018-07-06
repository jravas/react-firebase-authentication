import React from "react";
import { Link } from "react-router-dom";
import * as routes from "../constants/routes";

export default () => {
  return (
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
          <li className="nav-item active">
            <Link className="nav-link" to={routes.HOME}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={routes.LANDING}>
              Landing
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={routes.ACCOUNT}>
              Account
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
};
