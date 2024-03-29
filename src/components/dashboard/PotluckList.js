// Libraries
import React from "react";
import { useSelector } from "react-redux";
import {NavLink} from 'react-router-dom';

const PotluckList = () => {
	const currentUser = useSelector(state => state.currentUser);

	return (
		<div>
			<h1>Events</h1>
			{currentUser.data.events === []
				? currentUser.data.events.map(event => (
						<NavLink key={event.id} to={`/events/${event.id}`}>
							{event.event_name} {event.dates}
						</NavLink>
				  ))
				: `No Events`}
		</div>
	);
};

export default PotluckList;
