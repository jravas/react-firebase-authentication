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
  price,
  actionPrice,
  discountActive
) => async dispatch => {
  dispatch(showLoading());
  let key = productsRef.push().key;
  if (category === "") {
    // set category to uncategorised if not selected
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
            [key]: Product(
              key,
              name,
              description,
              category,
              imageUrl,
              price,
              actionPrice,
              discountActive
            )
          })
          .then(() => {
            toast(`${name} added !`, defaultToastConfig);
            dispatch(hideLoading());
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
  price,
  actionPrice,
  discountActive
) => async dispatch => {
  // if image didn't updated send iamgeUrl string
  dispatch(showLoading());
  if (typeof image === "string") {
    productsRef
      .child(id)
      .update(
        Product(
          id,
          name,
          description,
          category,
          image,
          price,
          actionPrice,
          discountActive
        )
      )
      .then(() => {
        history.push(routes.ADMIN_PRODUCTS);
        toast(`${name} edited !`, defaultToastConfig);
        dispatch(hideLoading());
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
                    price,
                    actionPrice,
                    discountActive
                  )
                })
                .then(() => {
                  history.push(routes.ADMIN_PRODUCTS);
                  toast(`${name} edited !`, defaultToastConfig);
                  dispatch(hideLoading());
                });
            });
          });
      });
  }
};

// delete Product
export const deleteProduct = productId => async dispatch => {
  dispatch(showLoading());
  productsRef
    .child(productId)
    .remove()
    .then(() => {
      toast(`Product deleted !`, defaultToastConfig);
      dispatch(hideLoading());
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
  dispatch(showLoading());
  productsRef.on("value", snapshot => {
    dispatch({
      type: FETCH_PRODUCTS,
      payload: snapshot.val()
    });
    dispatch(hideLoading());
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
  dispatch(showLoading());
  let key = categoriesRef.push().key;
  categoriesRef.update({ [key]: Category(key, name) }).then(() => {
    toast(`${name} added !`, defaultToastConfig);
    dispatch(hideLoading());
  });
};

//update category
export const updateCategory = (category, newCatName) => async dispatch => {
  dispatch(showLoading());
  categoriesRef
    .child(category.id)
    .update(Category(category.id, newCatName))
    .then(() => {
      // update product category on category change
      productsRef.on("value", snapshot => {
        const products = snapshot.val();
        Object.keys(products).map(key => {
          if (products[key].category === category.name) {
            const {
              id,
              name,
              description,
              imageUrl,
              price,
              actionPrice,
              discountActive
            } = products[key];

            // update product
            productsRef.update({
              [id]: Product(
                id,
                name,
                description,
                newCatName,
                imageUrl,
                price,
                actionPrice,
                discountActive
              )
            });
            return true;
          }
          return false;
        });
      });
      history.push(routes.ADMIN_CATEGORIES);
      toast(`${newCatName} edited !`, defaultToastConfig);
      dispatch(hideLoading());
    });
};

// delete category
export const deleteCategory = catForDelete => async dispatch => {
  dispatch(showLoading());
  categoriesRef
    .child(catForDelete.id)
    .remove()
    .then(() => {
      // update product category to uncategorised on category delete
      productsRef.on("value", snapshot => {
        const products = snapshot.val();
        Object.keys(products).map(key => {
          if (products[key].category === catForDelete.name) {
            const {
              id,
              name,
              description,
              imageUrl,
              price,
              actionPrice,
              discountActive
            } = products[key];

            // set category to uncategorised
            productsRef.update({
              [id]: Product(
                id,
                name,
                description,
                "Uncategorised",
                imageUrl,
                price,
                actionPrice,
                discountActive
              )
            });
            return true;
          }
          return false;
        });
      });
      toast(`Category deleted !`, defaultToastConfig);
      dispatch(hideLoading());
    });
};

// get category by id
export const fetchCategory = categoryId => async dispatch => {
  dispatch(showLoading());
  categoriesRef.child(categoryId).on("value", snapshot => {
    dispatch({
      type: FETCH_CATEGORIES,
      payload: snapshot.val()
    });
    dispatch(hideLoading());
  });
};

// list categories
export const fetchCategories = () => async dispatch => {
  dispatch(showLoading());
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
    dispatch(hideLoading());
  });
};
