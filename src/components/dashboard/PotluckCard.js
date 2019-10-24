// Libraries
import React from "react";
import { useSelector } from "react-redux";

// components
import EventPage from "components/events/EventPage";

const PotluckCard = () => {
	const currentUser = useSelector(state => state.currentUser);

	const dummyinfo = [
		{
			id: 9,
			event_name: "potluck at the park",
			time: "5:00pm",
			location: "NYC Center Park",
			dates: "9-18-19",
			guests: "Bob, steve, Smith, Sam",
			users_id: 1
		}
	];

	return (
		<div>
			<h1>Card</h1>
			{currentUser.events === []
				? currentUser.events.filter((
						event //logical conditions needed
				  ) => <EventPage eventInfo={event} />)
				: `No Events`}
			<EventPage eventInfo={dummyinfo} />
		</div>
	);
};

export default PotluckCard;
