// Library
import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

// Reducers
import { EventsReducers } from "event/eventReducer";
import { UsersReducers } from "user/userReducer";

const CombinedReducers = combineReducers({
	events: EventsReducers,
	users: UsersReducers,
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
