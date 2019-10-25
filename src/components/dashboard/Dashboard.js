// Libraries
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

// Actions
import * as usersActions from "states/users/usersActions";
import * as eventActions from "states/events/eventsActions";

// helpers
import { useDispatchThunk } from "helpers/useDispatchThunk";

// components
import PotluckCard from "components/dashboard/PotluckCard";
import PotluckList from "components/dashboard/PotluckList";

const Dashboard = props => {
	const currentUser = useSelector(state => state.currentUser);

	const [getUserInfo, updateClosestEvent] = useDispatchThunk([
		usersActions.getUserWithEvents,
		eventActions.updateClosestEvent
	]);

	useEffect(() => {
		getUserInfo(localStorage.getItem("id"));
		updateClosestEvent(
			currentUser.events.sort((a, b) => {
				return a.dates - b.dates || a.time - b.time;
			})
		);
	}, [currentUser, getUserInfo, updateClosestEvent]);

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
