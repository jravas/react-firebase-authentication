import { AUTH_USER_SET } from "./types";

export const sessionReducer = (state = { authUser: null }, action) => {
  switch (action.type) {
    case AUTH_USER_SET: {
      return {
        ...state,
        authUser: action.authUser
      };
    }
    default:
      return state;
  }
};
