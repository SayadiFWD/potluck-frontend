// Types
import * as types from "states/events/eventsTypes";
const intialEventsState = [];
export const eventsReducers = (events = intialEventsState, action) => {
	switch (action.type) {
		case types.GET_EVENTS_INFO:
			return action.payload;
		default:
			return events;
	}
};

const intialclosestEvent = {};
export const closestEventReducer = (event = intialclosestEvent, action) => {
	switch (action.type) {
		case types.UPDATE_CLOSEST_EVENT:
			return action.payload;
		default:
			return event;
	}
};

const intialcurrentEvent = {};
export const selectEventReducer = (event = intialcurrentEvent, action) => {
	switch (action.type) {
		case types.UPDATE_SELECT_EVENT:
			return action.payload;
		default:
			return event;
	}
};

// const initialuseEvent = {};
// export const inUseCurrentEventReducer = (event = initialuseEvent, action) => {
// 	switch (action.type) {
// 		case types.UPDATE_INUSE_EVENT:
// 			return action.payload;
// 		default:
// 			return event;
// 	}
// };
