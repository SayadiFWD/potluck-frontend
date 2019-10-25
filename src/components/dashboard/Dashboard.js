// Libraries
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

// Actions
import * as usersActions from "states/users/usersActions";
import * as eventActions from 'states/events/eventsActions';

// helpers
import { useDispatchThunk } from "helpers/useDispatchThunk";

// components
import PotluckCard from "components/dashboard/PotluckCard";
import PotluckList from "components/dashboard/PotluckList";

const Dashboard = props => {
	const currentUser = useSelector(state => state.currentUser);
	const currentEvents = useSelector(state => state.currentEvents);
	const closestEvent = useSelector(state => state.closestEvent);

	const getUserInfo = useDispatchThunk(usersActions.getUserWithEvents);
	const updateEvent = useDispatchThunk( eventActions.updateEvent);


	useEffect(() => {
		getUserInfo(localStorage.getItem("id"));
		// needs to get currentEvents
		// update currentEvents state
		// sort through both time and date in currentEvents
		// update closest even state with first item of arr
	
	}, []);

	return (
		<div>
			<p>{JSON.stringify(currentUser)}</p>
			<NavLink to='/potluckform'>
				<button>Create Event</button>
			</NavLink>
			<PotluckCard />
			<PotluckList />
		</div>
	);
};

export default Dashboard;
