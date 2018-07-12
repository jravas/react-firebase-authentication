import { FETCH_CATEGORIES } from "../actions/types";

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

// export default (state = {}, action) => {
//   switch (action.type) {
//     case FETCH_CATEGORIES:
//       return action.payload;
//     default:
//       return state;
//   }
// };
