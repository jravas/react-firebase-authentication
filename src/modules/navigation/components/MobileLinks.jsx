import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import * as routes from "@/main/constants/routes";
import Search from "@/main/components/Search";
import admin from "@/main/constants/hardCodedAdmin";

export class MobileLinksWORouter extends Component {
  componentDidMount() {
    document.body.style.overflow = "hidden";
  }
  componentWillUnmount() {
    document.body.style.overflow = "auto";
  }
  render() {
    const { onClick, location, authUser } = this.props;
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
        {authUser && authUser.email === admin.email ? (
          <li
            className={
              location.pathname === routes.ADMIN_PRODUCTS
                ? "main-navigation__mobile__item main-navigation__mobile__item--active"
                : "main-navigation__mobile__item"
            }
          >
            <Link to={routes.ADMIN_PRODUCTS}>Products administration</Link>
          </li>
        ) : null}
        {authUser && authUser.email === admin.email ? (
          <li
            className={
              location.pathname === routes.ADMIN_CATEGORIES
                ? "main-navigation__mobile__item main-navigation__mobile__item--active"
                : "main-navigation__mobile__item"
            }
          >
            <Link to={routes.ADMIN_CATEGORIES}>Categories administration</Link>
          </li>
        ) : null}
        {authUser && authUser.email === admin.email ? (
          <li
            className={
              location.pathname === routes.ADMIN_USERS
                ? "main-navigation__mobile__item main-navigation__mobile__item--active"
                : "main-navigation__mobile__item"
            }
          >
            <Link to={routes.ADMIN_USERS}>Users</Link>
          </li>
        ) : null}
      </ul>
    );
  }
}
const mapStateToProps = state => ({
  authUser: state.sessionState.authUser
});

const MobileLinks = withRouter(connect(mapStateToProps)(MobileLinksWORouter));

export { MobileLinks };
