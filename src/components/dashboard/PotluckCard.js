// Libraries
import React from "react";
import { useSelector } from "react-redux";

const PotluckCard = () => {
  const currentUser = useSelector(state => state.currentUser);
	return (
		<div>
			<h1>Card</h1>
      {currentUser.events === [] ? currentUser.events.filter(event => 
      <div>
        <h1>Next Event</h1>
      </div>

      ): `No Events`}
		</div>
	);
};

export default PotluckCard;
