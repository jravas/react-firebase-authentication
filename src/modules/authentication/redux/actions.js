import { auth } from "@/main/firebase";
// todo
import { db, usersRef } from "@/main/firebase/firebase";
import { showLoading, hideLoading } from "react-redux-loading-bar";
import { User } from "../models/user";
import { toast } from "react-toastify";
import defaultToastConfig from "@/main/constants/defaultToastConfig";
import history from "@/main/constants/history";
import * as routes from "@/main/constants/routes";

// add user
export const AddUser = (
  username,
  email,
  passwordOne,
  cart
) => async dispatch => {
  dispatch(showLoading());
  auth
    // create user in firebase auth
    .doCreateUserWithEmailAndPassword(email, passwordOne)
    .then(authUser => {
      // create user in firebase database
      db.ref(`users/${authUser.user.uid}`)
        .set(User(authUser.user.uid, username, email, 0))
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
        if (firebaseCart) {
          Object.keys(firebaseCart).map(key => arr.push(firebaseCart[key]));
          // check difference between cart and firebase
          const diffBy = pred => (a, b) =>
            a.filter(x => !b.some(y => pred(x, y)));
          const makeSymmDiffFunc = pred => (a, b) =>
            diffBy(pred)(a, b).concat(diffBy(pred)(b, a));
          const myDiff = makeSymmDiffFunc((x, y) => x.cartId === y.cartId);
          const result = myDiff(arr, cart);
          // add items from cart to firebase
          result.forEach(el => {
            usersRef.child(`${user.user.uid}/cart`).push(el);
          });
        } else {
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
