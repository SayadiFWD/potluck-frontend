// Library
import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

// Reducers
import { EventsReducers } from "states/events/eventsReducer";
import { userReducers } from "states/users/usersReducer";

const CombinedReducers = combineReducers({
  events: EventsReducers,
  user: userReducers
});

const store = createStore(
  CombinedReducers,
  {},
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
