import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import * as reducers from './reducers/reducer';

const CombinedReducers = combineReducers({
	
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