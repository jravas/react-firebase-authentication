import React from "react";
import { Link } from "react-router-dom";
import Search from "@/main/components/Search";
import * as routes from "@/main/constants/routes";
import { SharedLinks } from "./SharedLinks";

export const NavigationAuthAdmin = () => (
  <nav className="main-navigation">
    <div className="main-navigation__logo">
      <Link to={routes.HOME}>Stolen memes</Link>
    </div>
    <div className="main-navigation__search">
      <div className="main-navigation__search__item">
        <Search />
      </div>
    </div>
    <SharedLinks>
      <li className="main-navigation__links__item">
        <Link
          className="main-navigation__links__item__link"
          to={routes.ADMIN_PRODUCTS}
        >
          Products
        </Link>
      </li>
      <li className="main-navigation__links__item">
        <Link
          className="main-navigation__links__item__link"
          to={routes.ADMIN_CATEGORIES}
        >
          Categories
        </Link>
      </li>
      <li className="main-navigation__links__item">
        <Link
          className="main-navigation__links__item__link"
          to={routes.ADMIN_USERS}
        >
          Users
        </Link>
      </li>
    </SharedLinks>
  </nav>
);
