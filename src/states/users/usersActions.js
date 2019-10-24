// Action Types
import * as types from "states/users/usersTypes";

// // Helpers
import { axiosWithAuth } from "helpers/auth";

export const displayUserInfo = userInfo => {
	return {
		type: types.GET_USER_INFO,
		payload: userInfo
	};
};

export const success = () => {
	return {
		type: types.SUCCESS
	};
};


const logoutSuccess = token => {
	return{
		type: types.LOG_OUT_USER,
		payload: token,
	};
};
const loginSuccess = token => {
	return{
		type: types.LOGIN_USER,
		payload: token,
	};
}

const updateUser = user => ({
	type: types.SUCCESS,
	payload: user
});

export const createUsers = id => dispatch => {
	axiosWithAuth()
		.put(`/api/users/${id}`)
		.then(res => {
			dispatch(success(res.data));
		})
		.catch(err => {
			console.log(err);
		});
};

export const editUser = id => dispatch => {
	axiosWithAuth()
		.put(`/api/users/${id}`)
		.then(res => {
			dispatch(success(res.data));
		})
		.catch(err => {
			console.log(err);
		});
};
export const deleteUser = id => dispatch => {
	axiosWithAuth()
		.delete(`/api/users/${id}`)
		.then(res => {
			dispatch(success(res.data));
		})
		.catch(err => {
			console.log(err);
		});
};

export const getUserWithEvents = id => dispatch => {
	axiosWithAuth()
		.get(`/api/users/${id}/events`)
		.then(res => {
			dispatch(displayUserInfo(res.data));
		})
		.catch(err => {
			console.log(err);
		});
};

export const login = (values, history) => dispatch => {
	axiosWithAuth()
		.post('https://potluck-backend.herokuapp.com/api/auth/login', values)
		.then(({ data }) => {
			localStorage.setItem("token", data.token)
			dispatch(loginSuccess(data));
			dispatch(displayUserInfo(data));
			history.push("/dashboard");
		})
		.catch(error => {
			console.error(error);
		});
};

export const register = user => dispatch => {
	axiosWithAuth()
		.post("https://potluck-backend.herokuapp.com/api/auth/register", user)
		.then(({ data }) => {
			console.log('success')
			dispatch(updateUser(data));
		})
		.catch(error => {
			console.log('nope')
			console.error(error);
		});
};

export const logout = () => dispatch =>{
	localStorage.clear();
	dispatch(logoutSuccess());
};
