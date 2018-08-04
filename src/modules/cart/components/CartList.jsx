import React from "react";
import { CartItem } from "./CartItem";

export const CartList = ({ cart, handleDelete }) => {
  return cart.length ? (
    <ul className="cart-list">
      {cart.map(item => (
        <CartItem item={item} key={item.cartId} handleDelete={handleDelete} />
      ))}
    </ul>
  ) : (
    <div className="cart-list-empty">
      <h1>Your cart is empty</h1>
    </div>
  );
};
