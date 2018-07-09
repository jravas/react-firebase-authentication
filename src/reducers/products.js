const INITIAL_STATE = {
  products: {}
};
const applySetProducts = (state, action) => ({
  ...state,
  products: action.products
});
function productsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "PRODUCTS_SET": {
      return applySetProducts(state, action);
    }
    default:
      return state;
  }
}
export default productsReducer;
