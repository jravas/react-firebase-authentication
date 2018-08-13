import { USERS_SET, GET_USER } from "./types";

export const authenticationReducer = (
  state = { users: [], user: {} },
  action
) => {
  switch (action.type) {
    case USERS_SET: {
      let arr = [];
      if (action.payload) {
        Object.keys(action.payload).map(key => {
          return arr.push(action.payload[key]);
        });
      }
      return {
        ...state,
        users: arr
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
