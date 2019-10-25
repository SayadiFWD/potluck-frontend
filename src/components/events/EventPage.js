// Libraries
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

// Components
import EventFoodList from "components/events/EventFoodList";
import EventGuestList from "components/events/EventGuestList";
import PotluckInfo from "components/events/PotluckInfo";

// Actions
import * as actions from "states/events/eventsActions";
import { compareIDs } from "states/owner/ownerActions";

// helpers
import { useDispatchThunk } from "helpers/useDispatchThunk";

const EventPage = props => {
	const closestEvent = useSelector(state => state.closestEvent);
	const owner = useSelector(state => state.isOwner);

	const [getEventInfo, setClosestEvent, matchID] = useDispatchThunk([
		actions.getEvents,
		actions.updateClosestEvent,
		compareIDs
	]);

	useEffect(() => {
		matchID();
		props.history
			? getEventInfo(props.match.params.id)
			: setClosestEvent(closestEvent);
	}, [getEventInfo, setClosestEvent, props, closestEvent, matchID]);

	return (
		<div>
			<PotluckInfo props={props}/>
			<EventFoodList props={props}/>
			<EventGuestList props={props}/>
			{owner && <button>Remove Event</button>}
		</div>
	);
};

export default EventPage;
