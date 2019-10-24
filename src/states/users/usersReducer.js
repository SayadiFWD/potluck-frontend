// Libraries
// import { combineReducers } from "states";

// Types
import * as types from "states/users/usersTypes";

const initialUser = {};
export const userReducers = (user = initialUser, action) => {
  switch (action.type) {
    case types.GET_USER_INFO:
      return action.payload? action.payload : user;
    default:
      return user;
  }
};
