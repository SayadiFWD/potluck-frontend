// Types
import * as types from "states/events/eventsTypes";
const intialEventState = []
export const eventsReducers = (events = intialEventState, action) => {
  switch (action.type) {
    case types.GET_EVENT_INFO:
      return action.payload;
      case types.UPDATE_CURRENT_EVENT:
        return events = action.payload
    default:
      return events;
  }
};

const intialclosestEvent = {}
export const closestEventReducer = (event = intialclosestEvent, action) => {
  switch(action.type){
    default:
      return event;
  }
}

const intialcurrentEvent = {}
export const selectEventReducer = (event =  intialcurrentEvent, action) => {
  switch(action.type){
    default:
      return event;
  }
}