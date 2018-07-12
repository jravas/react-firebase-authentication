import { productsRef } from "../../../firebase/firebase";
import { FETCH_PRODUCTS } from "../consts";
import Product from "../models/product";

// add Product
export const addProduct = (name, category) => async dispatch => {
  let key = productsRef.push().key;
  productsRef.update({ [key]: Product(key, name, category) });
};

// update Product
// export const updateProduct = (ProductId, name) => async dispatch => {
//   categoriesRef.child(ProductId).update(Product(name));
// };

// delete Product
export const deleteProduct = productId => async dispatch => {
  productsRef.child(productId).remove();
};

// list categories
export const fetchProducts = () => async dispatch => {
  productsRef.on("value", snapshot => {
    dispatch({
      type: FETCH_PRODUCTS,
      payload: snapshot.val()
    });
  });
};
