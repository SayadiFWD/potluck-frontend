// Types
import * as types from "states/events/eventsTypes";

export const eventsReducers = (events = {}, action) => {
  switch (action.type) {
    case types.GET_EVENT_INFO:
      return action.payload;
      case types.UPDATE_CURRENT_EVENT:
        return events = action.payload
    default:
      return events;
  }
};
