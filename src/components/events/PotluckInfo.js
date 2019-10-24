// Libraries
import React from "react";
import { useSelector } from "react-redux";


export const PotluckInfo = () => {
	const currentEvent = useSelector(state => state.currentEvent);

	return (
		<div>
      <p>Event Name: {currentEvent.event_name}</p>
      <p>Date: {currentEvent.dates}</p>
      <p>Time: {currentEvent.time}</p>
      <p>Location: {currentEvent.location}</p>

		</div>
	);
};

export default PotluckInfo;