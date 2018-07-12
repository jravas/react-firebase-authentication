import { FETCH_PRODUCTS } from "../consts";

const INITIAL_STATE = {
  products: {}
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
    default:
      return state;
  }
}
export default productsReducer;
