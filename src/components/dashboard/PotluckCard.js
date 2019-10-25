// Libraries
import React from "react";
import { useSelector } from "react-redux";

// components
import EventPage from "components/events/EventPage";

const PotluckCard = props => {
	const currentEvents = useSelector(state => state.currentEvents);


	return (
		<div>
			<h1>Card</h1>
			{currentEvents === {} ? 'Add Event' : <EventPage/>}
		</div>
	);
};

export default PotluckCard;
