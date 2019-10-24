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
	const currentEvent = useSelector(state => state.currentEvent);

	const getEventInfo = useDispatchThunk(actions.getEvent)

	useEffect(()=>{
		if (props.match.params.id){
		 getEventInfo(props.match.params.id) }
		 return props.eventInfo
	},[getEventInfo, props.match.params.id, props])

	const creatingProps = currentEvent.id ? currentEvent : props.eventInfo;

	return (
		<div>
			<EventFoodList event={creatingProps}/>
			<EventGuestList event={creatingProps}/>
			<PotluckInfo event={creatingProps}/>
		</div>
	);
};

export default EventPage;
