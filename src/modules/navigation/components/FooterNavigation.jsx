import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import * as routes from "@/main/constants/routes";

export class FooterNavigationWithout extends Component {
  render() {
    const { location } = this.props;
    return (
      <nav className="footer-wrapper__navigation">
        <ul className="footer-wrapper__navigation__links">
          <li
            className={
              location.pathname === routes.HOME
                ? "footer-wrapper__navigation__links__item footer-wrapper__navigation__links__item--active"
                : "footer-wrapper__navigation__links__item"
            }
          >
            <Link to={routes.HOME}>Home</Link>
          </li>
          <li
            className={
              location.pathname === routes.PRODUCTS
                ? "footer-wrapper__navigation__links__item footer-wrapper__navigation__links__item--active"
                : "footer-wrapper__navigation__links__item"
            }
          >
            <Link to={routes.PRODUCTS}>Products</Link>
          </li>
          <li
            className={
              location.pathname === routes.CART
                ? "footer-wrapper__navigation__links__item footer-wrapper__navigation__links__item--active"
                : "footer-wrapper__navigation__links__item"
            }
          >
            <Link to={routes.CART}>Cart</Link>
          </li>
          <li
            className={
              location.pathname === routes.HOME
                ? "footer-wrapper__navigation__links__item footer-wrapper__navigation__links__item--active"
                : "footer-wrapper__navigation__links__item"
            }
          >
            <Link to={routes.FAQ}>Faq</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

const FooterNavigation = withRouter(FooterNavigationWithout);

export { FooterNavigation };
