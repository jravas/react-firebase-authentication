import React from "react";
import { Link } from "react-router-dom";
import * as routes from "@/main/constants/routes";
import homeImage from "@/main/assets/images/home.svg";
import cartImage from "@/main/assets/images/shopping-basket.svg";
import storeImage from "@/main/assets/images/store.svg";
import userImage from "@/main/assets/images/user.svg";

export const SharedLinks = ({ children }) => {
  return (
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
          to={routes.PRODUCTS}
        >
          <img src={storeImage} alt="Home" />
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
      {children}
      <li className="main-navigation__links__item">
        <Link
          className="main-navigation__links__item__link icon"
          to={routes.ACCOUNT}
        >
          <img src={userImage} alt="Account" />
        </Link>
      </li>
    </ul>
  );
};
