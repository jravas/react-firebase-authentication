import { combineReducers } from "redux";
import sessionReducer from "./session";
import userReducer from "./user";
import productsReducer from "./products";
const rootReducer = combineReducers({
  sessionState: sessionReducer,
  userState: userReducer,
  productsState: productsReducer
});
export default rootReducer;
