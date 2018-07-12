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
    key,
    title,
    content
  });
};

export const deleteProduct = ProductId => async dispatch => {
  db.ref("products/")
    .child(ProductId)
    .remove();
};

export const onceGetProducts = () => db.ref("products").once("value");
