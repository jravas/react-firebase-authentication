import { combineReducers } from "redux";
import { sessionReducer } from "@/modules/authentication/redux/sessionReducer";
import { authenticationReducer } from "@/modules/authentication/redux/authenticationReducer ";
import { productsReducer } from "@/modules/product/redux/reducer";
import { categoriesReducer } from "@/modules/product/redux/reducer";
import { cartReducer } from "@/modules/cart/redux/reducer";
import { loadingBarReducer } from "react-redux-loading-bar";
const rootReducer = combineReducers({
  sessionState: sessionReducer,
  userState: authenticationReducer,
  productsState: productsReducer,
  categoriesState: categoriesReducer,
  cartState: cartReducer,
  loadingBar: loadingBarReducer
});
export default rootReducer;
