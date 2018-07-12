import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

// import * as firebase from "firebase";

const config = {
  apiKey: "AIzaSyBwhp7z1ncfKPKkTBcb5CIZhl4Z3LpVbvs",
  authDomain: "react-firebase-1e4b3.firebaseapp.com",
  databaseURL: "https://react-firebase-1e4b3.firebaseio.com",
  projectId: "react-firebase-1e4b3",
  storageBucket: "react-firebase-1e4b3.appspot.com",
  messagingSenderId: "955744531804"
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();
const db = firebase.database();
const dbRef = firebase.database().ref();
export const categoriesRef = dbRef.child("categories");

export { auth, db };
