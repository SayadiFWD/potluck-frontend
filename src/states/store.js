// Library
import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

// Reducers
import { eventsReducers, closestEventReducer, selectEventReducer } from "states/events/eventsReducer";
import { userReducers } from "states/users/usersReducer";

const CombinedReducers = combineReducers({
  currentEvents: eventsReducers,
  currentUser: userReducers,
  closestEvent: closestEventReducer,
  selectEvent: selectEventReducer,
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
