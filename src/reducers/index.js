import { combineReducers } from "redux";
import sessionReducer from "./session";
import userReducer from "./user";
import productsReducer from "./products";
import categoriesReducer from "./categories";
const rootReducer = combineReducers({
  sessionState: sessionReducer,
  userState: userReducer,
  productsState: productsReducer,
  categoriesState: categoriesReducer
});
export default rootReducer;
