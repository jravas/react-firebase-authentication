import { productsRef, storage } from "@/main/firebase/firebase";
import { FETCH_PRODUCTS } from "../consts";
import Product from "../models/product";

// add Product
export const addProduct = (
  name,
  description,
  category,
  image,
  price
) => async dispatch => {
  let key = productsRef.push().key;
  if (category === "") {
    category = "Uncategorised";
  }
  // upload image
  storage
    .child(`images/${key}`)
    .put(image)
    .then(snapshot => {
      // get image url
      let imageUrl = snapshot.ref.getDownloadURL();
      imageUrl.then(imageUrl => {
        // add product
        productsRef.update({
          [key]: Product(key, name, description, category, imageUrl, price)
        });
      });
    });
};

//update Product
export const updateProduct = (
  id,
  name,
  description,
  category,
  image,
  price
) => async dispatch => {
  // if image didn't updated send iamgeUrl string
  if (typeof image === "string") {
    productsRef
      .child(id)
      .update(Product(id, name, description, category, image, price));
  } else if (typeof image === "object") {
    // if image is updated send image object and delete old image
    storage
      .child(`images/${id}`)
      .delete()
      .then(() => {
        // upload new image and update product
        storage
          .child(`images/${id}`)
          .put(image)
          .then(snapshot => {
            // get image url
            let imageUrl = snapshot.ref.getDownloadURL();
            imageUrl.then(imageUrl => {
              // add product
              productsRef.update({
                [id]: Product(id, name, description, category, imageUrl, price)
              });
            });
          });
      });
  }
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
