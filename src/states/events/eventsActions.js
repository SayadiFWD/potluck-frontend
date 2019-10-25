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
	return {
		type: types.GET_EVENTS_INFO,
		payload: data
	};
};

export const updateEvent = props => {
	return {
		type: types.UPDATE_CURRENT_EVENT,
		payload: props
	};
};

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

export const getEvents = id => dispatch => {
	axiosWithAuth()
		.get(APIURL + `/api/foods/:${id}/events`)
		.then(res => {
			dispatch(eventInfo(res.data));
		})
		.catch(err => {
			console.log(err);
		});
};


export const updateClosestEvent = event => {
	return {
		type: types.UPDATE_CLOSEST_EVENT,
		payload: event
	};
};

export const eventFoodAdd = newFood => dispatch => {
	axiosWithAuth()
		.post(APIURL +`/api/foods`, newFood)
		.then(res => {
			dispatch({ type: types.EVENT_FOOD_ADD, payload: res.data });
		})
		.catch(err => {
			console.log(err);
		});
};
export const eventFoodEdit = (food, eventID) => dispatch => {
	axiosWithAuth()
		.put(APIURL +`/api/foods/${eventID}`, food)
		.then(res => {
			dispatch({ type: types.EVENT_FOOD_EDIT, payload: res.data });
		})
		.catch(err => {
			console.log(err);
		});
};
export const eventFoodDelete = (food, eventID) => dispatch => {
	axiosWithAuth()
		.delete(APIURL +`/api/foods/${eventID}`, food)
		.then(res => {
			dispatch({ type: types.EVENT_FOOD_DELETE, payload: res.data });
		})
		.catch(err => {
			console.log(err);
		});
};
export const eventGuestAdd = (newGuest, eventID) => dispatch => {
	axiosWithAuth()
		.put(APIURL +`/api/events/${eventID}`, newGuest)
		.then(res => {
			dispatch({ type: types.EVENT_GUEST_ADD, payload: res.data });
		})
		.catch(err => {
			console.log(err);
		});
};
export const eventGuestDelete = (guest, eventID) => dispatch => {
	axiosWithAuth()
		.put(APIURL +`/api/events/${eventID}`, guest)
		.then(res => {
			dispatch({ type: types.EVENT_GUEST_DELETE, payload: res.data });
		})
		.catch(err => {
			console.log(err);
		});
};
export const eventInfoEdit = (info, eventID) => dispatch => {
	axiosWithAuth()
		.put(APIURL +`/api/events/${eventID}`, info)
		.then(res => {
			dispatch({ type: types.EVENT_INFO_EDIT, payload: res.data });
		})
		.catch(err => {
			console.log(err);
		});
};
export const eventFoodGuestPick = (pickedFood, eventID) => dispatch => {
	axiosWithAuth()
		.put(APIURL +`/api/food/${eventID}`, pickedFood)
		.then(res => {
			dispatch({ type: types.EVENT_FOOD_SUBMIT, payload: res.data });
		})
		.catch(err => {
			console.log(err);
		});
};
export const eventGuestConfirm = () => dispatch => {
	console.log(`confirmed!`);
};

export const updateSelectEvent = event => dispatch => {
	return {
		type: types.UPDATE_SELECT_EVENT,
		payload: event
	};
};

