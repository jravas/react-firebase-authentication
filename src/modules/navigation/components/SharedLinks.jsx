import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import * as routes from "@/main/constants/routes";
import { MobileLinks } from "./MobileLinks";
import homeImage from "@/main/assets/images/home.svg";
import cartImage from "@/main/assets/images/shopping-basket.svg";
import storeImage from "@/main/assets/images/store.svg";
import userImage from "@/main/assets/images/user.svg";

class Links extends Component {
  state = { navigationVisible: false };

  mobileNavigation = () => {
    this.setState({ navigationVisible: !this.state.navigationVisible });
    //
  };
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.setState({ navigationVisible: false });
    }
  }
  render() {
    const { navigationVisible } = this.state;
    const { children, location } = this.props;
    return !navigationVisible ? (
      <ul className="main-navigation__links">
        <li className="main-navigation__links__item">
          <Link
            className={
              location.pathname === routes.HOME
                ? "main-navigation__links__item__link--active icon"
                : " main-navigation__links__item__link icon"
            }
            to={routes.HOME}
          >
            <img src={homeImage} alt="Home" />
          </Link>
        </li>
        <li className="main-navigation__links__item">
          <Link
            className={
              location.pathname === routes.PRODUCTS ||
              // ugly fix
              location.pathname.slice(0, 8) === "/product"
                ? "main-navigation__links__item__link--active icon"
                : " main-navigation__links__item__link icon"
            }
            to={routes.PRODUCTS}
          >
            <img src={storeImage} alt="Home" />
          </Link>
        </li>
        <li className="main-navigation__links__item">
          <Link
            className={
              location.pathname === routes.CART ||
              location.pathname === routes.CART_CHECKOUT
                ? "main-navigation__links__item__link--active icon"
                : " main-navigation__links__item__link icon"
            }
            to={routes.CART}
          >
            <img src={cartImage} alt="Shopping basket" />
          </Link>
        </li>
        {children}
        <li className="main-navigation__links__item">
          <Link
            className={
              location.pathname === routes.ACCOUNT ||
              location.pathname === routes.SIGN_IN
                ? "main-navigation__links__item__link--active icon"
                : " main-navigation__links__item__link icon"
            }
            to={routes.ACCOUNT}
          >
            <img src={userImage} alt="Account" />
          </Link>
        </li>
        <li className="main-navigation__links__menu-button">
          <button onClick={this.mobileNavigation} type="button" />
        </li>
      </ul>
    ) : (
      <MobileLinks onClick={this.mobileNavigation} />
    );
  }
}

const SharedLinks = withRouter(Links);

export { SharedLinks };
