import { FETCH_PRODUCTS, FETCH_PRODUCTS_ARR } from "./types";

const INITIAL_STATE = {
  products: {},
  productsArr: []
};

export const productsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS: {
      return {
        ...state,
        products: action.payload
      };
    }
    case FETCH_PRODUCTS_ARR: {
      let arr = [];
      Object.keys(action.payload).map(key => {
        return arr.push(action.payload[key]);
      });
      return {
        ...state,
        productsArr: arr
      };
    }
    default:
      return state;
  }
};
