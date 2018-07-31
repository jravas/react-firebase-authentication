import { USERS_SET } from "./types";
const INITIAL_STATE = {
  users: {}
};

export const authenticationReducer = (state = INITIAL_STATE, action) => {
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
