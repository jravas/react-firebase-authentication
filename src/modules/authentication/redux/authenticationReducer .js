import { USERS_SET, GET_USER } from "./types";

export const authenticationReducer = (state = { users: {} }, action) => {
  switch (action.type) {
    case USERS_SET: {
      return {
        ...state,
        users: action.payload
      };
    }
    case GET_USER: {
      return {
        ...state,
        user: action.payload
      };
    }
    default:
      return state;
  }
};
