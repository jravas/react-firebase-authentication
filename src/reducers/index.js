import { combineReducers } from "redux";
import sessionReducer from "./session";
import userReducer from "./user";
import productsReducer from "../modules/product/redux/reducer";
import categoriesReducer from "../modules/category/redux/reducer";
const rootReducer = combineReducers({
  sessionState: sessionReducer,
  userState: userReducer,
  productsState: productsReducer,
  categoriesState: categoriesReducer
});
export default rootReducer;
