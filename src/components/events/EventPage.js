// Libraries
import React, { useEffect } from "react";

// Components
import EventFoodList from "components/events/EventFoodList";
import EventGuestList from "components/events/EventGuestList";
import PotluckInfo from "components/events/PotluckInfo";

// Actions
import * as actions from "states/events/eventsActions";

// helpers
import { useDispatchThunk } from "helpers/useDispatchThunk";

const EventPage = props => {

	const getEventInfo = useDispatchThunk(actions.getEvent);

	useEffect(() => {
		if (props.length > 1) {
			getEventInfo(props.match.params.id);
		} else {
			actions.updateEvent(props.eventInfo);
		}
	}, [getEventInfo, props]);

	return (
		<div>
			<EventFoodList />
			<EventGuestList />
			<PotluckInfo />
		</div>
	);
};

export default EventPage;
