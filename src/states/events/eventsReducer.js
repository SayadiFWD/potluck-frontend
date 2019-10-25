// Types
import * as types from "states/events/eventsTypes";
const intialEventsState = []
export const eventsReducers = (events = intialEventsState, action) => {
  switch (action.type) {
    case types.GET_EVENTS_INFO:
      return action.payload;
    default:
      return events;
  }
};

// Need a updateClosest Event -  
// needs to be able to create update and delete: food, guests, info
const intialclosestEvent = {}
export const closestEventReducer = (event = intialclosestEvent, action) => {
  switch(action.type){
    default:
      return event;
  }
}

//get currentevent
// needs to be able to create update and delete: food, guests, info
const intialcurrentEvent = {}
export const selectEventReducer = (event =  intialcurrentEvent, action) => {
  switch(action.type){
    default:
      return event;
  }
}