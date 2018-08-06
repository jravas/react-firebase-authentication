import React from "react";
import { Link } from "react-router-dom";
import * as routes from "@/main/constants/routes";
import logo from "../assets/images/logo.png";

export const Logo = () => {
  return (
    <div className="main-navigation__logo">
      <Link to={routes.HOME}>
        <img src={logo} alt="Logo" />
      </Link>
    </div>
  );
};
