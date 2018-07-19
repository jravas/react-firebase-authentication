import React, { Component } from "react";
import CartItem from "./CartItem";
import "./CartList.scss";

export default class CartList extends Component {
  render() {
    const { cart } = this.props;
    return (
      cart && (
        <ul className="cart-list">
          {cart.map((item, i) => <CartItem item={item} key={i} />)}
        </ul>
      )
    );
  }
}
