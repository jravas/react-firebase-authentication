import { FETCH_PRODUCTS, FETCH_PRODUCTS_ARR, FETCH_CATEGORIES } from "./types";

export const productsReducer = (
  state = { products: {}, productsArr: [] },
  action
) => {
  switch (action.type) {
    case FETCH_PRODUCTS: {
      return {
        ...state,
        products: action.payload
      };
    }
    case FETCH_PRODUCTS_ARR: {
      let arr = [];
      if (action.payload) {
        Object.keys(action.payload).map(key => {
          return arr.push(action.payload[key]);
        });
      }
      return {
        ...state,
        productsArr: arr
      };
    }
    default:
      return state;
  }
};

// categories reducer

export const categoriesReducer = (state = { categories: {} }, action) => {
  switch (action.type) {
    case FETCH_CATEGORIES: {
      return {
        ...state,
        categories: action.payload
      };
    }
    default:
      return state;
  }
};
