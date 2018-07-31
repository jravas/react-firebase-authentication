import cuid from "cuid";
import { usersRef } from "@/main/firebase/firebase";
import { CartItem } from "../model/cartItem";
import { ADD_TO_CART, REMOVE_FROM_CART, FETCH_CART_ITEMS } from "./types";
import { toast } from "react-toastify";
import defaultToastConfig from "@/main/constants/defaultToastConfig";

// add to cart
export const AddToCart = (product, authUser) => async dispatch => {
  const { id, name, imageUrl, price, category } = product;
  const cartId = cuid();
  const model = CartItem(id, name, imageUrl, price, cartId, category);
  if (authUser) {
    // add cart item to firebase
    usersRef.child(`${authUser.uid}/cart`).push(model);
  }
  toast(`${name} added to cart !`, defaultToastConfig);
  dispatch({
    type: ADD_TO_CART,
    payload: model
  });
};
// delete from cart
export const RemoveFromCart = (cartItemId, authUser) => async dispatch => {
  if (authUser) {
    usersRef
      .child(`${authUser.uid}/cart`)
      .orderByChild("cartId")
      .equalTo(cartItemId.cartId)
      .once("value")
      .then(snapshot => {
        snapshot.forEach(element => {
          usersRef.child(`${authUser.uid}/cart/${element.key}`).remove();
        });
      });
  }
  toast(`${cartItemId.name} removed from cart !`, defaultToastConfig);
  dispatch({
    type: REMOVE_FROM_CART,
    payload: cartItemId
  });
};

// list cart items
export const fetchCartItems = (authUser, cart) => async dispatch => {
  if (authUser) {
    usersRef.child(`${authUser.uid}/cart`).on("value", snapshot => {
      dispatch({
        type: FETCH_CART_ITEMS,
        payload: snapshot.val()
      });
    });
  }
};
