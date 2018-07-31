import React from "react";
import CartItem from "./CartItem";

export const CartList = props => {
  const { cart } = props;
  return cart.length ? (
    <ul className="cart-list">
      {cart.map((item, i) => <CartItem item={item} key={i} />)}
    </ul>
  ) : (
    <div className="cart-list-empty">
      <h1>Your cart is empty</h1>
    </div>
  );
};
