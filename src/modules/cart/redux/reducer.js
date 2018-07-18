const INITIAL_STATE = {
  cart: []
};

function cartReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADD_TO_CART": {
      return {
        ...state,
        cart: [...state.cart, action.payload]
      };
    }
    case "REMOVE_FROM_CART": {
      return {
        ...state,
        cart: state.cart.filter(element => element.cartId !== action.payload)
      };
    }
    default:
      return state;
  }
}
export default cartReducer;
