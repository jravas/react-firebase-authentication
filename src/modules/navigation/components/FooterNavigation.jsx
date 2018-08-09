import React from "react";
import { Link } from "react-router-dom";
import * as routes from "@/main/constants/routes";

export const FooterNavigation = () => {
  return (
    <nav className="footer-wrapper__navigation">
      <ul className="footer-wrapper__navigation__links">
        <li className="footer-wrapper__navigation__links__item">
          <Link to={routes.HOME}>Home</Link>
        </li>
        <li className="footer-wrapper__navigation__links__item">
          <Link to={routes.PRODUCTS}>Shop</Link>
        </li>
        <li className="footer-wrapper__navigation__links__item">
          <Link to={routes.CART}>Cart</Link>
        </li>
        <li className="footer-wrapper__navigation__links__item">
          <Link to={routes.FAQ}>Faq</Link>
        </li>
      </ul>
    </nav>
  );
};
