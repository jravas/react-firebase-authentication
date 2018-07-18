// add to cart
export const AddToCart = product => async dispatch => {
  product.cartId = new Date().getTime();
  dispatch({
    type: "ADD_TO_CART",
    payload: product
  });
};

// delete from cart
export const RemoveFromCart = cartItemId => async dispatch => {
  dispatch({
    type: "REMOVE_FROM_CART",
    payload: cartItemId
  });
};
