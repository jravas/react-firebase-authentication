import React from "react";
import { Link } from "react-router-dom";
import { auth } from "@/main/firebase";
import * as routes from "@/main/constants/routes";
import homeImage from "@/main/images/home.svg";
import cartImage from "@/main/images/shopping-basket.svg";

const NavigationAuthUser = () => (
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
        <Link
          className="main-navigation__links__item__link icon"
          to={routes.HOME}
        >
          <img src={homeImage} alt="Home" />
        </Link>
      </li>
      <li className="main-navigation__links__item">
        <Link
          className="main-navigation__links__item__link icon"
          to={routes.CART}
        >
          <img src={cartImage} alt="Shopping basket" />
        </Link>
      </li>
      <li className="main-navigation__links__item">
        <a
          className="main-navigation__links__item__link"
          onClick={auth.doSignOut}
        >
          Sign Out
        </a>
      </li>
    </ul>
  </nav>
);

export default NavigationAuthUser;
