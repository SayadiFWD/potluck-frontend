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

export const CreateEvent = id => dispatch => {
	UseAxiosWithAuth()
		.post(APIURL + `/api/events/${id}`)
		.then(res => {
			dispatch(types.SUCCESS(res.data));
		})
		.catch(err => {
			console.log(err);
		});
};

export const EditEvent = id => dispatch => {
	UseAxiosWithAuth()
		.put(APIURL + `/api/events/${id}`)
		.then(res => {
			dispatch(types.SUCCESS(res.data));
		})
		.catch(err => {
			console.log(err);
		});
};

export const DeleteEvent = id => dispatch => {
	UseAxiosWithAuth()
		.delete(APIURL + `/api/events/${id}`)
		.then(res => {
			dispatch(types.SUCCESS(res.data));
		})
		.catch(err => {
			console.log(err);
		});
};
