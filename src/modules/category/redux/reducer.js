import { FETCH_CATEGORIES } from "./types";

const INITIAL_STATE = {
  categories: {}
};

export const categoriesReducer = (state = INITIAL_STATE, action) => {
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
