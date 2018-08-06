import React from "react";
import { Link } from "react-router-dom";
import Search from "@/main/components/Search";
import * as routes from "@/main/constants/routes";
import { Logo } from "@/main/components/Logo";
import { SharedLinks } from "./SharedLinks";

export const NavigationAuthAdmin = () => (
  <nav className="main-navigation">
    <Logo />
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
