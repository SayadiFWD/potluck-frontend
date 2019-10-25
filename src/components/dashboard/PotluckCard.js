// Libraries
import React from "react";
import { useSelector } from "react-redux";

// components
import EventPage from "components/events/EventPage";

const PotluckCard = props => {
	const currentUser = useSelector(state => state.currentUser);

	return (
		<div>
			<h1>Card</h1>
			{currentUser.data.events === [] ? <EventPage/> : 'Add Event'}
		</div>
	);
};

export default PotluckCard;
