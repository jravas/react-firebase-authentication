import { FETCH_CATEGORIES } from "../consts";

const INITIAL_STATE = {
  categories: {}
};
const applySetCategories = (state, action) => ({
  ...state,
  categories: action.payload
});
function categoriesReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_CATEGORIES: {
      return applySetCategories(state, action);
    }
    default:
      return state;
  }
}
export default categoriesReducer;
