import { categoriesRef } from "../../../firebase/firebase";
import { FETCH_CATEGORIES } from "../consts";
import Catergory from "../models/category";

// add category
export const addCategory = name => async dispatch => {
  let key = categoriesRef.push().key;
  categoriesRef.update({ [key]: Catergory(key, name) });
};

//update category
export const updateCategory = (categoryId, name) => async dispatch => {
  categoriesRef.child(categoryId).update(Catergory(categoryId, name));
};

// delete category
export const deleteCategory = categoryId => async dispatch => {
  categoriesRef.child(categoryId).remove();
};

// get category by id
export const fetchCategory = categoryId => async dispatch => {
  console.log(categoryId);
  categoriesRef.child(categoryId).on("value", snapshot => {
    dispatch({
      type: FETCH_CATEGORIES,
      payload: snapshot.val()
    });
  });
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
