import React from "react";
import FlipMove from "react-flip-move";
import { CartItem } from "./CartItem";

export const CartList = ({ cart, handleDelete }) => {
  return cart.length ? (
    <FlipMove typeName="ul" className="cart-list">
      {cart.map(item => (
        <CartItem item={item} key={item.cartId} handleDelete={handleDelete} />
      ))}
    </FlipMove>
  ) : (
    <div className="cart-list-empty">
      <h1>Your cart is empty</h1>
    </div>
  );
};
