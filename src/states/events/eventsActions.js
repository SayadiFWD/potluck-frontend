// Action Types
import * as types from "states/events/eventsTypes";

// // Helpers
import { UseAxiosWithAuth } from "../../helpers/auth";

const APIURL = "https://potluck-backend.herokuapp.com/";

export const success = () => {
	return {
		type: types.SUCCESS
	};
};

export const createEvent = id => dispatch => {
	UseAxiosWithAuth()
		.post(APIURL + `/api/events/1`)
		.then(res => {
			dispatch(success(res.data));
		})
		.catch(err => {
			console.log(err);
		});
};

export const editEvent = id => dispatch => {
	UseAxiosWithAuth()
		.put(APIURL + `/api/events/${id}`)
		.then(res => {
			dispatch(success(res.data));
		})
		.catch(err => {
			console.log(err);
		});
};

export const deleteEvent = id => dispatch => {
	UseAxiosWithAuth()
		.delete(APIURL + `/api/events/${id}`)
		.then(res => {
			dispatch(success(res.data));
		})
		.catch(err => {
			console.log(err);
		});
};
