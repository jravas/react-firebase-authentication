import cuid from "cuid";
import CartItem from "../model/cartItem";
// add to cart
export const AddToCart = product => async dispatch => {
  const { id, name, imageUrl, price, category } = product;
  const cartId = cuid();
  dispatch({
    type: "ADD_TO_CART",
    payload: CartItem(id, name, imageUrl, category, price, cartId)
  });
};

// delete from cart
export const RemoveFromCart = cartItemId => async dispatch => {
  dispatch({
    type: "REMOVE_FROM_CART",
    payload: cartItemId
  });
};
