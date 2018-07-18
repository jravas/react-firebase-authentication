import React from "react";
import { Link } from "react-router-dom";
import * as routes from "../../../main/constants/routes";
import "./Navigation.scss";

const NavigationNonAuth = () => (
  <nav className="main-navigation">
    <div className="main-navigation__logo">
      <Link to={routes.LANDING}>Stolen memes</Link>
    </div>
    <div className="main-navigation__search">
      <div className="main-navigation__search__item">
        <input type="text" name="search" placeholder="Search products" />
      </div>
    </div>
    <ul className="main-navigation__links">
      <li className="main-navigation__links__item">
        <Link className="main-navigation__links__item__link" to={routes.HOME}>
          Home
        </Link>
      </li>
      <li className="main-navigation__links__item">
        <Link className="main-navigation__links__item__link" to={routes.CART}>
          Cart
        </Link>
      </li>
      <li className="main-navigation__links__item">
        <Link
          className="main-navigation__links__item__link"
          to={routes.SIGN_IN}
        >
          Sign In
        </Link>
      </li>
    </ul>
  </nav>
);

export default NavigationNonAuth;
