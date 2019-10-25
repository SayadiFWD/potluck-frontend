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
		type: types.GET_EVENTS_INFO,
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
	.get(APIURL + `/api/foods/:${id}/events`)
	.then(res => {
		dispatch(eventInfo(res.data));
	})
	.catch(err => {
		console.log(err);
	});
}

// CLOSEST REDUCER
const updateClosestEvent = event =>{
	return{
		type: types.UPDATE_CLOSEST_EVENT,
		payload: event,
	};
} 


export const closestFoodAdd = newFood => dispatch => {

}
export const closestFoodEdit = food => dispatch => {
	
}
export const closestFoodDelete = food => dispatch => {
	
}
export const closestGuestAdd = newFood => dispatch => {
	
}
export const closestGuestDelete = newFood => dispatch => {
	
}
export const closestInfoEdit = newFood => dispatch => {
	
}
export const closestFoodGuestPick = newFood => dispatch => {
	
}
export const closestGuestConfirm = () => dispatch => {
	console.log(`confirmed!`)
}

//SELECT REDUCER'

export const getSelectEvent = data => dispatch => {

}

export const selectFoodAdd = newFood => dispatch => {

}
export const selectFoodEdit = food => dispatch => {
	
}
export const selectFoodDelete = food => dispatch => {
	
}
export const selectGuestAdd = newFood => dispatch => {
	
}
export const selectGuestDelete = newFood => dispatch => {
	
}
export const selectInfoEdit = newFood => dispatch => {
	
}
export const selectFoodGuestPick = newFood => dispatch => {
	
}
export const selectGuestConfirm = () => dispatch => {
	console.log(`confirmed!`)
}