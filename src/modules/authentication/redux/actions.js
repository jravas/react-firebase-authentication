import { auth } from "@/main/firebase";
import { db, usersRef } from "@/main/firebase/firebase";
import { showLoading, hideLoading } from "react-redux-loading-bar";
import { User } from "../models/user";
import { toast } from "react-toastify";
import defaultToastConfig from "@/main/constants/defaultToastConfig";
import history from "@/main/constants/history";
import * as routes from "@/main/constants/routes";
import { USERS_SET, GET_USER } from "./types";

// add user
export const AddUser = (
  username,
  passwordOne,
  firstName,
  lastName,
  email,
  address,
  state,
  phone,
  city,
  zipCode,
  cart
) => async dispatch => {
  dispatch(showLoading());
  auth
    // create user in firebase auth
    .doCreateUserWithEmailAndPassword(email, passwordOne)
    .then(authUser => {
      // create user in firebase database
      db.ref(`users/${authUser.user.uid}`)
        .set(
          User(
            authUser.user.uid,
            username,
            email,
            firstName,
            lastName,
            address,
            state,
            phone,
            city,
            zipCode,
            0
          )
        )
        .then(() => {
          // sync item added to cart with firebase
          cart.forEach(el => {
            usersRef.child(`${authUser.user.uid}/cart`).push(el);
          });
          history.push(routes.HOME);
          dispatch(hideLoading());
        });
    })
    .catch(error => {
      toast(error.message, defaultToastConfig);
      dispatch(hideLoading());
    });
};

// sign in
export const SignIn = (email, password, cart) => async dispatch => {
  dispatch(showLoading());
  auth
    .doSignInWithEmailAndPassword(email, password)
    .then(user => {
      // sync cart & firebase
      usersRef.child(`${user.user.uid}/cart`).once("value", snapshot => {
        let arr = [];
        let firebaseCart = snapshot.val();

        // check if cart exist in firebase
        if (firebaseCart) {
          Object.keys(firebaseCart).map(key => arr.push(firebaseCart[key]));

          // check difference between cart and firebase
          const result = cart.filter(
            item => !arr.some(other => item.cartId === other.cartId)
          );

          // add items from cart to firebase
          result.forEach(el => {
            usersRef.child(`${user.user.uid}/cart`).push(el);
          });
        } else {
          // if no items in firebase cart add local item to firebase cart
          cart.forEach(el => {
            usersRef.child(`${user.user.uid}/cart`).push(el);
          });
        }
        history.push(routes.HOME);
        dispatch(hideLoading());
      });
    })
    .catch(error => {
      toast(error.message, defaultToastConfig);
      dispatch(hideLoading());
    });
};

// send password reset mail
export const ResetPassword = email => async dispatch => {
  dispatch(showLoading());
  auth
    .doPasswordReset(email)
    .then(() => {
      dispatch(hideLoading());
      toast(`Password reset link sent to ${email}`, defaultToastConfig);
      history.push(routes.SIGN_IN);
    })
    .catch(error => {
      toast(error.message, defaultToastConfig);
      dispatch(hideLoading());
    });
};
// change password
export const ChangePassword = password => async dispatch => {
  dispatch(showLoading());
  auth
    .doPasswordUpdate(password)
    .then(() => {
      toast(`Password changed successfully !`, defaultToastConfig);
    })
    .catch(error => {
      toast(error.message, defaultToastConfig);
      dispatch(hideLoading());
    });
};

// list users
export const ListUsers = () => async dispatch => {
  dispatch(showLoading());
  usersRef
    .once("value", snapshot => {
      dispatch({
        type: USERS_SET,
        payload: snapshot.val()
      });
    })
    .then(() => {
      dispatch(hideLoading());
    });
};

// get user by id
export const GetUser = userId => async dispatch => {
  dispatch(showLoading());
  usersRef.child(userId).on("value", snapshot => {
    dispatch({
      type: GET_USER,
      payload: snapshot.val()
    });
    dispatch(hideLoading());
  });
};

// update user info
export const UpdateUser = ({
  id,
  username,
  email,
  firstName,
  lastName,
  address,
  state,
  phone,
  city,
  zipCode,
  cart
}) => async dispatch => {
  dispatch(showLoading());
  usersRef
    .child(id)
    .update(
      User(
        id,
        username,
        email,
        firstName,
        lastName,
        address,
        state,
        phone,
        city,
        zipCode,
        cart
      )
    )
    .then(() => {
      toast("User info updated", defaultToastConfig);
      dispatch(hideLoading());
    });
};
