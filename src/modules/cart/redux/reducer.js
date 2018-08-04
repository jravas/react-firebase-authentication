import { ADD_TO_CART, REMOVE_FROM_CART, FETCH_CART_ITEMS } from "./types";

export const cartReducer = (state = { cart: [], cartTotal: 0 }, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      return {
        ...state,
        cart: [...state.cart, action.payload]
      };
    }
    case REMOVE_FROM_CART: {
      console.log(action.payload);
      return {
        ...state,
        cart: state.cart.filter(element => element.cartId !== action.payload)
      };
    }
    case FETCH_CART_ITEMS: {
      let total = 0;
      let arr = [];
      if (action.payload) {
        Object.keys(action.payload).map(key => arr.push(action.payload[key]));
        arr.forEach(element => {
          total += Number(element.price);
        });
      }
      return {
        ...state,
        cart: [...arr],
        cartTotal: total
      };
    }
    default:
      return state;
  }
};
