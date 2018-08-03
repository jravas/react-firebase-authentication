import React from "react";
import { Link } from "react-router-dom";
import Search from "@/main/components/Search";
import * as routes from "@/main/constants/routes";
import { SharedLinks } from "./SharedLinks";

const NavigationNonAuth = () => (
  <nav className="main-navigation">
    <div className="main-navigation__logo">
      <Link to={routes.HOME}>Stolen memes</Link>
    </div>
    <div className="main-navigation__search">
      <div className="main-navigation__search__item">
        <Search />
      </div>
    </div>
    <SharedLinks />
  </nav>
);

export default NavigationNonAuth;
