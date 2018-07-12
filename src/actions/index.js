import { categoriesRef } from "../firebase/firebase";
import { FETCH_CATEGORIES } from "./types";
import Category from "../models/category";

// add category
export const addCategory = name => async dispatch => {
  let key = categoriesRef.push().key;
  categoriesRef.update({ [key]: Category(key, name) });
};
// update category
// export const updateCategory = (categoryId, name) => async dispatch => {
//   categoriesRef.child(categoryId).update(Category(name));
// };

// delete category
export const deleteCategory = categoryId => async dispatch => {
  categoriesRef.child(categoryId).remove();
};

// list categories
export const fetchCategories = () => async dispatch => {
  categoriesRef.on("value", snapshot => {
    dispatch({
      type: FETCH_CATEGORIES,
      payload: snapshot.val()
    });
  });
};
