import { productsRef, storage, categoriesRef } from "@/main/firebase/firebase";
import { showLoading, hideLoading } from "react-redux-loading-bar";
import { FETCH_PRODUCTS, FETCH_PRODUCTS_ARR, FETCH_CATEGORIES } from "./types";
import { Product } from "../models/product";
import { Category } from "../models/category";
import { toast } from "react-toastify";
import defaultToastConfig from "@/main/constants/defaultToastConfig";
import history from "@/main/constants/history";
import * as routes from "@/main/constants/routes";

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
        productsRef
          .update({
            [key]: Product(key, name, description, category, imageUrl, price)
          })
          .then(() => {
            toast(`${name} added !`, defaultToastConfig);
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
      .update(Product(id, name, description, category, image, price))
      .then(() => {
        history.push(routes.ADMIN_PRODUCTS);
        toast(`${name} edited !`, defaultToastConfig);
      });
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
              productsRef
                .update({
                  [id]: Product(
                    id,
                    name,
                    description,
                    category,
                    imageUrl,
                    price
                  )
                })
                .then(() => {
                  history.push(routes.ADMIN_PRODUCTS);
                  toast(`${name} edited !`, defaultToastConfig);
                });
            });
          });
      });
  }
};

// delete Product
export const deleteProduct = productId => async dispatch => {
  productsRef
    .child(productId)
    .remove()
    .then(() => {
      toast(`Product deleted !`, defaultToastConfig);
    });
};

// get product by id
export const fetchProduct = productId => async dispatch => {
  dispatch(showLoading());
  productsRef
    .child(productId)
    .once("value", snapshot => {
      dispatch({
        type: FETCH_PRODUCTS,
        payload: snapshot.val()
      });
    })
    .then(() => {
      dispatch(hideLoading());
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

// list products
export const fetchProductsArr = () => async dispatch => {
  dispatch(showLoading());
  productsRef
    .once("value", snapshot => {
      dispatch({
        type: FETCH_PRODUCTS_ARR,
        payload: snapshot.val()
      });
    })
    .then(() => {
      dispatch(hideLoading());
    });
};

// category actions

// add category
export const addCategory = name => async dispatch => {
  let key = categoriesRef.push().key;
  categoriesRef.update({ [key]: Category(key, name) }).then(() => {
    toast(`${name} added !`, defaultToastConfig);
  });
};

//update category
export const updateCategory = (categoryId, name) => async dispatch => {
  categoriesRef
    .child(categoryId)
    .update(Category(categoryId, name))
    .then(() => {
      history.push(routes.ADMIN_CATEGORIES);
      toast(`${name} edited !`, defaultToastConfig);
    });
};

// delete category
export const deleteCategory = categoryId => async dispatch => {
  categoriesRef
    .child(categoryId)
    .remove()
    .then(() => {
      toast(`Category deleted !`, defaultToastConfig);
    });
};

// get category by id
export const fetchCategory = categoryId => async dispatch => {
  categoriesRef.child(categoryId).on("value", snapshot => {
    dispatch({
      type: FETCH_CATEGORIES,
      payload: snapshot.val()
    });
  });
};

// list categories
export const fetchCategories = () => async dispatch => {
  // add Uncategorised if there is no categories
  categoriesRef.once("value", snapshot => {
    let value = snapshot.val();
    let name = "Uncategorised";
    if (!value) {
      dispatch(addCategory(name));
    }
  });
  categoriesRef.on("value", snapshot => {
    dispatch({
      type: FETCH_CATEGORIES,
      payload: snapshot.val()
    });
  });
};
