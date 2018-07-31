import { USERS_SET } from "./types";

export const authenticationReducer = (state = { users: {} }, action) => {
  switch (action.type) {
    case USERS_SET: {
      return {
        ...state,
        users: action.users
      };
    }
    default:
      return state;
  }
};
