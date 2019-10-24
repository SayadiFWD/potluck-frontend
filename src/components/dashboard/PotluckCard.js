// Libraries
import React from "react";
import { useSelector } from "react-redux";


const PotluckCard = () => {
  const currentUser = useSelector(state => state.currentUser);
	return (
		<div>
			<h1>Card</h1>
      {currentUser.events === [] ? currentUser.events.filter(event => //logical conditions needed
        <div>{event.event_name} {event.dates} </div>
      ): `No Events`}
		</div>
	);
};

export default PotluckCard;
