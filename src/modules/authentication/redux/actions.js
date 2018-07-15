import { auth } from "../../../main/firebase";
// todo
import { db } from "../../../main/firebase/firebase";
import User from "../models/user";

// add user
export const AddUser = (username, email, passwordOne) => async dispatch => {
  auth
    // create user in firebase auth
    .doCreateUserWithEmailAndPassword(email, passwordOne)
    .then(authUser => {
      // create user in firebase database
      db.ref(`users/${authUser.user.uid}`).set(
        User(authUser.user.uid, username, email)
      );
    });
};
// sign in
export const SignIn = (email, password) => async dispatch =>
  auth.doSignInWithEmailAndPassword(email, password);

// send password reset mail
export const ResetPassword = email => async dispatch => {
  auth
    .doPasswordReset(email)
    .then(() => {
      console.log("success");
    })
    .catch(error => {
      console.log("error");
    });
};
