import { auth } from "./firebase";

// sign up
export const doCreateUserWithEmailAndPassword = (email, password) =>
  auth.createUserWithEmailAndPassword(email, password);

// sign in
export const doSignInWithEmailAndPassword = (email, password) =>
  auth.signInWithEmailAndPassword(email, password);

// sign out
export const doSignOut = () => auth.signOut();

// password reset
export const doPasswordReset = email => auth.sendPasswordResetEmail();

// password change
export const doPasswordUpdate = password =>
  auth.currentUser.updatePassword(password);
