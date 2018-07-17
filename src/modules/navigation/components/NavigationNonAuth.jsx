import React from "react";
import { Link } from "react-router-dom";
import * as routes from "../../../main/constants/routes";
import "./Navigation.css";

const NavigationNonAuth = () => (
  <nav className="main-navigation">
    <div className="logo">
      <Link to={routes.LANDING}>Logo</Link>
    </div>
    <div className="search">
      <div className="search-item">
        <input type="text" name="search" placeholder="Search products" />
      </div>
    </div>
    <ul>
      <li className="navigation-item">
        <Link className="navigation-link" to={routes.LANDING}>
          Landing
        </Link>
      </li>
      <li className="navigation-item">
        <Link className="navigation-link" to={routes.SIGN_IN}>
          Sign In
        </Link>
      </li>
    </ul>
  </nav>
);

export default NavigationNonAuth;
