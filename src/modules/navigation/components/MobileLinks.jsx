import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import * as routes from "@/main/constants/routes";
import Search from "@/main/components/Search";

export class MobileLinksWORouter extends Component {
  componentDidMount() {
    document.body.style.overflow = "hidden";
  }
  componentWillUnmount() {
    document.body.style.overflow = "auto";
  }
  render() {
    const { onClick, location } = this.props;
    return (
      <ul className="main-navigation__mobile">
        <button
          className="main-navigation__mobile__close"
          type="button"
          onClick={onClick}
        />
        <div className="main-navigation__mobile__wrap">
          <Search />
        </div>
        <li
          className={
            location.pathname === routes.HOME
              ? "main-navigation__mobile__item main-navigation__mobile__item--active"
              : "main-navigation__mobile__item"
          }
        >
          <Link to={routes.HOME}>Home</Link>
        </li>
        <li
          className={
            location.pathname === routes.PRODUCTS
              ? "main-navigation__mobile__item main-navigation__mobile__item--active"
              : "main-navigation__mobile__item"
          }
        >
          <Link to={routes.PRODUCTS}>Products</Link>
        </li>
        <li
          className={
            location.pathname === routes.CART
              ? "main-navigation__mobile__item main-navigation__mobile__item--active"
              : "main-navigation__mobile__item"
          }
        >
          <Link to={routes.CART}>Cart</Link>
        </li>
        <li
          className={
            location.pathname === routes.ACCOUNT
              ? "main-navigation__mobile__item main-navigation__mobile__item--active"
              : "main-navigation__mobile__item"
          }
        >
          <Link to={routes.ACCOUNT}>Account</Link>
        </li>
      </ul>
    );
  }
}

const MobileLinks = withRouter(MobileLinksWORouter);

export { MobileLinks };
