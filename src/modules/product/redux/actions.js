import { productsRef } from "../../../firebase/firebase";
import { FETCH_PRODUCTS } from "../consts";
import Product from "../models/product";

// add Product
export const addProduct = (name, category) => async dispatch => {
  let key = productsRef.push().key;
  productsRef.update({ [key]: Product(key, name, category) });
};

//update Product
export const updateProduct = (productId, name, category) => async dispatch => {
  // productsRef.child(productId).update(Product(name, category));
  productsRef.child(productId).update(Product(productId, name, category));
};

// delete Product
export const deleteProduct = productId => async dispatch => {
  productsRef.child(productId).remove();
};

// get product by id
export const fetchProduct = productId => async dispatch => {
  productsRef.child(productId).on("value", snapshot => {
    dispatch({
      type: FETCH_PRODUCTS,
      payload: snapshot.val()
    });
  });
};

// list products
export const fetchProducts = () => async dispatch => {
  productsRef.on("value", snapshot => {
    dispatch({
      type: FETCH_PRODUCTS,
      payload: snapshot.val()
    });
  });
};
