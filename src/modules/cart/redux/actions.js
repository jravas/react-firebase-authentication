import cuid from "cuid";
import { usersRef } from "@/main/firebase/firebase";
import CartItem from "../model/cartItem";

// add to cart
export const AddToCart = (product, authUser) => async dispatch => {
  const { id, name, imageUrl, price, category } = product;
  const cartId = cuid();
  const model = CartItem(id, name, imageUrl, price, cartId, category);
  if (authUser) {
    // add cart item to firebase
    usersRef.child(`${authUser.uid}/cart`).push(model);
  }
  dispatch({
    type: "ADD_TO_CART",
    payload: model
  });
};
// todo AD IF AUTH
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
  }
  dispatch({
    type: "REMOVE_FROM_CART",
    payload: cartItemId
  });
};

// list cart items
export const fetchCartItems = (authUser, cart) => async dispatch => {
  // if (authUser && cart.length) {
  //   // console.log("cart not empty");
  //   // cart.forEach(el => usersRef.child(`${authUser.uid}/cart`).push(el));
  //   usersRef.child(`${authUser.uid}/cart`).on("value", snapshot => {
  //     dispatch({
  //       type: "FETCH_CART_ITEMS",
  //       payload: snapshot.val()
  //     });
  //   });
  // } else if (authUser) {
  //   usersRef.child(`${authUser.uid}/cart`).on("value", snapshot => {
  //     dispatch({
  //       type: "FETCH_CART_ITEMS",
  //       payload: snapshot.val()
  //     });
  //   });
  // }
  // if (authUser && cart.length) {
  //   usersRef.child(`${authUser.uid}/cart`).on("value", snapshot => {
  //     let arr = [];
  //     let test = snapshot.val();
  //     Object.keys(test).map(key => arr.push(test[key]));
  //     console.log(arr);
  //     arr = arr.filter(val => !cart.includes(val.cartId));
  //     console.log(arr);
  //     // dispatch({
  //     //   type: "FETCH_CART_ITEMS",
  //     //   payload: snapshot.val()
  //     // });
  //   });
  // }
  if (authUser) {
    usersRef.child(`${authUser.uid}/cart`).on("value", snapshot => {
      dispatch({
        type: "FETCH_CART_ITEMS",
        payload: snapshot.val()
      });
    });
  }
};
