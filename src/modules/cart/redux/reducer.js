const INITIAL_STATE = {
  cart: []
};

function cartReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADD_TO_CART": {
      // return applySetCart(state, action);
      return {
        ...state,
        cart: [...state.cart, action.payload]
      };
    }
    case "REMOVE_FROM_CART": {
      //return state.filter(element => element.cartId !== action.payload);
      console.log(state);
      return state;
    }
    default:
      return state;
  }
}
export default cartReducer;
