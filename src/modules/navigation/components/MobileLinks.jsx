import React, { Component } from "react";
import { Link } from "react-router-dom";
import Search from "@/main/components/Search";
import * as routes from "@/main/constants/routes";

export class MobileLinks extends Component {
  componentDidMount() {
    document.body.style.overflow = "hidden";
  }
  componentWillUnmount() {
    document.body.style.overflow = "auto";
  }
  render() {
    const { onClick } = this.props;
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
        <li className="main-navigation__mobile__item">
          <Link to={routes.HOME}>Home</Link>
        </li>
        <li className="main-navigation__mobile__item">
          <Link to={routes.PRODUCTS}>Products</Link>
        </li>
        <li className="main-navigation__mobile__item">
          <Link to={routes.CART}>Cart</Link>
        </li>
        <li className="main-navigation__mobile__item">
          <Link to={routes.ACCOUNT}>Account</Link>
        </li>
      </ul>
    );
  }
}
