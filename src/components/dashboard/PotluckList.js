// Libraries
import React from "react";
import { useSelector } from "react-redux";
import {NavLink} from 'react-router-dom';

const PotluckList = () => {
	const currentUser = useSelector(state => state.currentUser);

	return (
		<div>
			<h1>Events</h1>
			{currentUser.events === []
				? currentUser.events.map(event => (
						<NavLink key={event.id} to={`/events/${event.id}`}>
							{event.event_name} {event.dates}
						</NavLink>
				  ))
				: `No Events`}
				{[
						{
							id: 9,
							event_name: "potluck at the park",
							time: "5:00pm",
							location: "NYC Center Park",
							dates: "9-18-19",
							guests: "Bob, steve, Smith, Sam",
							users_id: 1
						}
				  ].map(event => (
						<NavLink key={event.id} to={`/events/${event.id}`}>
							{event.event_name} {event.dates}
						</NavLink>
				  ))}
		</div>
	);
};

export default PotluckList;
