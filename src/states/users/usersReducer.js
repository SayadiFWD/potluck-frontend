// Types
import * as types from "states/users/usersTypes";

const initialUser = {
	data: {},
	authorized: localStorage.getItem("token") ? true : false
};
export const userReducers = (user = initialUser, action) => {
	switch (action.type) {
		case types.GET_USER_INFO:
			return action.payload ? { ...user, data: action.payload } : { user };
		case types.LOG_OUT_USER:
			return { ...user, authorized: false };
		case types.LOGIN_USER:
			return { ...user, authorized: true };
		default:
			return user;
	}
};
