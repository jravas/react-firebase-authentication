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
    case "FETCH_CART_ITEMS": {
      console.log(state, action.payload);
      return state;
    }
    default:
      return state;
  }
}
export default cartReducer;
