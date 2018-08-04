import React from "react";

export const CartTotal = ({ total }) => {
  return !total ? null : (
    <div className="cart-total">
      <h1>Total: {total.toFixed(2)}</h1>
    </div>
  );
};
