import React from "react";
import { Link } from "react-router-dom";
import SignOutButton from "../../../main/components/SignOut";
import * as routes from "../../../main/constants/routes";
import "./Navigation.scss";

const NavigationAuth = () => (
  <nav className="main-navigation">
    <div className="main-navigation__logo">
      <Link to={routes.HOME}>Stolen memes</Link>
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
        <SignOutButton />
      </li>
    </ul>
  </nav>
);

export default NavigationAuth;
