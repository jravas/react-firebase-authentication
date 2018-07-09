import { db } from "./firebase";
// User API
export const doCreateUser = (id, username, email) =>
  db.ref(`users/${id}`).set({
    username,
    email
  });
export const onceGetUsers = () => db.ref("users").once("value");
// Other Entity APIs ...

// Products API
export const doCreateProduct = (title, content) => {
  let key = db.ref("products/").push().key;

  db.ref(`products/${key}`).set({
    title,
    content
  });
};

export const onceGetProducts = () => db.ref("products").once("value");
