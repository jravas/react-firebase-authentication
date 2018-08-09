import cuid from "cuid";
import { usersRef, ordersRef } from "@/main/firebase/firebase";
import { CartItem } from "../model/cartItem";
import { cartCheckout } from "../model/cartCheckout";
import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  FETCH_CART_ITEMS,
  CART_CHECKOUT
} from "./types";
import { toast } from "react-toastify";
import defaultToastConfig from "@/main/constants/defaultToastConfig";
import { showLoading, hideLoading } from "react-redux-loading-bar";
import history from "@/main/constants/history";
import * as routes from "@/main/constants/routes";

// add to cart
export const AddToCart = (product, authUser) => async dispatch => {
  const {
    id,
    name,
    imageUrl,
    price,
    actionPrice,
    discountActive,
    category
  } = product;
  const cartId = cuid();
  const model = CartItem(
    id,
    name,
    imageUrl,
    price,
    actionPrice,
    discountActive,
    cartId,
    category
  );
  if (authUser) {
    // add cart item to firebase
    usersRef.child(`${authUser.uid}/cart`).push(model);
  } else {
    dispatch({
      type: ADD_TO_CART,
      payload: model
    });
  }
  toast(`${name} added to cart !`, defaultToastConfig);
};
// delete from cart
export const RemoveFromCart = (cartItemId, authUser) => async dispatch => {
  if (authUser) {
    usersRef
      .child(`${authUser.uid}/cart`)
      .orderByChild("cartId")
      .equalTo(cartItemId)
      .once("value")
      .then(snapshot => {
        snapshot.forEach(element => {
          usersRef.child(`${authUser.uid}/cart/${element.key}`).remove();
        });
      });
  } else {
    dispatch({
      type: REMOVE_FROM_CART,
      payload: cartItemId
    });
  }
  toast(`Product removed from cart !`, defaultToastConfig);
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
  } else {
    dispatch({
      type: FETCH_CART_ITEMS,
      payload: cart
    });
  }
};

// Checkout
export const CheckOutOrder = (
  firstName,
  lastName,
  email,
  address,
  state,
  phone,
  city,
  zipCode,
  cart,
  authUser
) => async dispatch => {
  const model = cartCheckout(
    firstName,
    lastName,
    email,
    address,
    state,
    phone,
    city,
    zipCode,
    cart
  );
  // add cart item to firebase
  dispatch(showLoading());
  let key = ordersRef.push().key;
  ordersRef
    .update({ [key]: model })
    .then(() => {
      dispatch({
        type: CART_CHECKOUT
      });
      toast(`Order sent!`, defaultToastConfig);
      history.push(routes.HOME);
      dispatch(hideLoading());
      if (authUser) {
        usersRef.child(`${authUser.uid}/cart`).set(0);
      }
    })
    .catch(error => {
      toast(error.message, defaultToastConfig);
      dispatch(hideLoading());
    });
};
