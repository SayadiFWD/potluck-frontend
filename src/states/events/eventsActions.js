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

// CLOSEST REDUCER
export const updateClosestEvent = event => {
	return {
		type: types.UPDATE_CLOSEST_EVENT,
		payload: event
	};
};

export const closestFoodAdd = newFood => dispatch => {
	axiosWithAuth()
		.post(`/api/foods`, newFood)
		.then(res => {
			dispatch({ type: types.CLOSEST_FOOD_ADD, payload: res.data });
		})
		.catch(err => {
			console.log(err);
		});
};
export const closestFoodEdit = (food, eventID) => dispatch => {
	axiosWithAuth()
		.put(`/api/foods/${eventID}`, food)
		.then(res => {
			dispatch({ type: types.CLOSEST_FOOD_EDIT, payload: res.data });
		})
		.catch(err => {
			console.log(err);
		});
};
export const closestFoodDelete = (food, eventID) => dispatch => {
	axiosWithAuth()
		.delete(`/api/foods/${eventID}`, food)
		.then(res => {
			dispatch({ type: types.CLOSEST_FOOD_DELETE, payload: res.data });
		})
		.catch(err => {
			console.log(err);
		});
};
export const closestGuestAdd = (newGuest, eventID) => dispatch => {
	axiosWithAuth()
		.put(`/api/events/${eventID}`, newGuest)
		.then(res => {
			dispatch({ type: types.CLOSEST_GUEST_ADD, payload: res.data });
		})
		.catch(err => {
			console.log(err);
		});
};
export const closestGuestDelete = (guest, eventID) => dispatch => {
	axiosWithAuth()
		.put(`/api/events/${eventID}`, guest)
		.then(res => {
			dispatch({ type: types.CLOSEST_GUEST_DELETE, payload: res.data });
		})
		.catch(err => {
			console.log(err);
		});
};
export const closestInfoEdit = (info, eventID) => dispatch => {
	axiosWithAuth()
		.put(`/api/events/${eventID}`, info)
		.then(res => {
			dispatch({ type: types.CLOSEST_INFO_EDIT, payload: res.data });
		})
		.catch(err => {
			console.log(err);
		});
};
export const closestFoodGuestPick = (pickedFood, eventID) => dispatch => {
	axiosWithAuth()
		.put(`/api/food/${eventID}`, pickedFood)
		.then(res => {
			dispatch({ type: types.CLOSEST_FOOD_SUBMIT, payload: res.data });
		})
		.catch(err => {
			console.log(err);
		});
};
export const closestGuestConfirm = () => dispatch => {
	console.log(`confirmed!`);
};

//SELECT REDUCER
export const updateSelectEvent = event => dispatch => {
	return {
		type: types.UPDATE_SELECT_EVENT,
		payload: event
	};
};

export const selectFoodAdd = newFood => dispatch => {
	axiosWithAuth()
		.post(`/api/foods`, newFood)
		.then(res => {
			dispatch({ type: types.SELECT_FOOD_ADD, payload: res.data });
		})
		.catch(err => {
			console.log(err);
		});
};
export const selectFoodEdit = (food, eventID) => dispatch => {
	axiosWithAuth()
		.put(`/api/foods/${eventID}`, food)
		.then(res => {
			dispatch({ type: types.SELECT_FOOD_EDIT, payload: res.data });
		})
		.catch(err => {
			console.log(err);
		});
};
export const selectFoodDelete = (food, eventID) => dispatch => {
	axiosWithAuth()
		.delete(`/api/foods/${eventID}`, food)
		.then(res => {
			dispatch({ type: types.SELECT_FOOD_DELETE, payload: res.data });
		})
		.catch(err => {
			console.log(err);
		});
};
export const selectGuestAdd = (newGuest, eventID) => dispatch => {
	axiosWithAuth()
		.put(`/api/events/${eventID}`, newGuest)
		.then(res => {
			dispatch({ type: types.SELECT_GUEST_ADD, payload: res.data });
		})
		.catch(err => {
			console.log(err);
		});
};
export const selectGuestDelete = (guest, eventID) => dispatch => {
	axiosWithAuth()
		.put(`/api/events/${eventID}`, guest)
		.then(res => {
			dispatch({ type: types.SELECT_GUEST_DELETE, payload: res.data });
		})
		.catch(err => {
			console.log(err);
		});
};
export const selectInfoEdit = (info, eventID) => dispatch => {
	axiosWithAuth()
		.put(`/api/events/${eventID}`, info)
		.then(res => {
			dispatch({ type: types.SELECT_INFO_EDIT, payload: res.data });
		})
		.catch(err => {
			console.log(err);
		});
};
export const selectFoodGuestPick = (pickedFood, eventID) => dispatch => {
	axiosWithAuth()
		.put(`/api/food/${eventID}`, pickedFood)
		.then(res => {
			dispatch({ type: types.SELECT_FOOD_SUBMIT, payload: res.data });
		})
		.catch(err => {
			console.log(err);
		});
};
export const selectGuestConfirm = () => dispatch => {
	console.log(`confirmed!`);
};
