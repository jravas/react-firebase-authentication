import {
  FETCH_PRODUCT,
  FETCH_PRODUCTS_ARR,
  FETCH_CATEGORIES,
  FETCH_CATEGORY
} from "./types";

export const productsReducer = (
  state = { productsArr: [], product: {} },
  action
) => {
  switch (action.type) {
    case FETCH_PRODUCT: {
      return {
        ...state,
        product: action.payload
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

export const categoriesReducer = (
  state = { categories: [], category: {} },
  action
) => {
  switch (action.type) {
    case FETCH_CATEGORIES: {
      let arr = [];
      if (action.payload) {
        Object.keys(action.payload).map(key => {
          return arr.push(action.payload[key]);
        });
      }
      return {
        ...state,
        categories: arr
      };
    }
    case FETCH_CATEGORY: {
      return {
        ...state,
        category: action.payload
      };
    }
    default:
      return state;
  }
};
