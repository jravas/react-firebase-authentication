import { combineReducers } from "redux";
import sessionReducer from "./session";
import userReducer from "./user";
import productsReducer from "../../modules/product/redux/reducer";
import categoriesReducer from "../../modules/category/redux/reducer";
import cartReducer from "../../modules/cart/redux/reducer";
const rootReducer = combineReducers({
  sessionState: sessionReducer,
  userState: userReducer,
  productsState: productsReducer,
  categoriesState: categoriesReducer,
  cartState: cartReducer
});
export default rootReducer;
