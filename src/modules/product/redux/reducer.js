import { FETCH_PRODUCTS, FETCH_PRODUCTS_ARR } from "../consts";

const INITIAL_STATE = {
  products: {},
  productsArr: []
};
const applySetProducts = (state, action) => ({
  ...state,
  products: action.payload
});
function productsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_PRODUCTS: {
      return applySetProducts(state, action);
    }
    case FETCH_PRODUCTS_ARR: {
      let arr = [];
      Object.keys(action.payload).map(key => {
        arr.push(action.payload[key]);
      });
      return {
        ...state,
        productsArr: arr
      };
    }
    default:
      return state;
  }
}
export default productsReducer;
