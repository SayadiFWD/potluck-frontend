// Libraries
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

// Components
import EventFoodList from "components/events/EventFoodList";
import EventGuestList from "components/events/EventGuestList";
import PotluckInfo from "components/events/PotluckInfo";

// Actions
import * as actions from "states/events/eventsActions";

// helpers
import { useDispatchThunk } from "helpers/useDispatchThunk";

const EventPage = props => {

	const closestEvents = useSelector(state => state.closestEvents);
	const selectEvent = useSelector(state => state.selectEvent);


	useEffect(() => {
		// if props exist then getEventInfo(props.match.params.id) then update selectEvent
		//otherwise update info with the same state
		// need a delete event

	}, []);

	return (
		<div>
			<PotluckInfo />
			<EventFoodList />
			<EventGuestList />
		
		</div>
	);
};

export default EventPage;
