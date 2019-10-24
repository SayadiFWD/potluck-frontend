// Action Types
import * as types from "states/events/eventsTypes";

// // Helpers
import { axiosWithAuth } from "helpers/auth";

const APIURL = "https://potluck-backend.herokuapp.com/";

export const success = () => {
	return {
		type: types.SUCCESS
	};
};

export const eventInfo = data => {
	return{
		type: types.GET_EVENT_INFO,
		payload: data,
	};
};

export const updateEvent = props => {
	return{
		type: types.UPDATE_CURRENT_EVENT,
		payload: props,
	}
}

export const createEvent = id => dispatch => {
	axiosWithAuth()
		.post(APIURL + `/api/events/${id}`)
		.then(res => {
			dispatch(success(res.data));
		})
		.catch(err => {
			console.log(err);
		});
};

export const editEvent = id => dispatch => {
	axiosWithAuth()
		.put(APIURL + `/api/events/${id}`)
		.then(res => {
			dispatch(success(res.data));
		})
		.catch(err => {
			console.log(err);
		});
};

export const deleteEvent = id => dispatch => {
	axiosWithAuth()
		.delete(APIURL + `/api/events/${id}`)
		.then(res => {
			dispatch(success(res.data));
		})
		.catch(err => {
			console.log(err);
		});
};

export const getEvent = id => dispatch => {
	axiosWithAuth()
	.get(APIURL + `/api/events/${id}`)
	.then(res => {
		dispatch(eventInfo(res.data));
	})
	.catch(err => {
		console.log(err);
	});
}

