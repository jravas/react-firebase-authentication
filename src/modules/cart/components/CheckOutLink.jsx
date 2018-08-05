import React from "react";
import { Link } from "react-router-dom";
import { CART_CHECKOUT } from "@/main/constants/routes";

export const CheckOutLink = () => {
  return (
    <Link className="default-button cart-button" to={CART_CHECKOUT}>
      Check out
    </Link>
  );
};
