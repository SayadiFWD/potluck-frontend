// Libraries
import React from "react";
import { useSelector } from "react-redux";

// components
import EventPage from "components/events/EventPage";

const PotluckCard = props => {
	const currentUser = useSelector(state => state.currentUser);

	const dummyinfo = {
		id: 1,
		event_name: "Food at NYC park",
		time: "5:00pm",
		location: "NYC Center Park",
		dates: "9-18-19",
		guests: "Bob, Steve, Smith, Sam",
		users_id: 1,
		food: [
			{
				id: 1,
				food_item: "pizza",
				events_id: 1,
				completed: false
			}
		]
	};

	return (
		<div>
			<h1>Card</h1>
			{currentUser.events === []
				? currentUser.events.filter((
						event //logical conditions needed
						// grouperArray.sort(function (a, b) {
						// 	return a.gsize - b.gsize || a.glow - b.glow;
						// });
				  ) => <EventPage eventInfo={event} />)
				: `No Events`}
			<EventPage eventInfo={dummyinfo} />
		</div>
	);
};

export default PotluckCard;
