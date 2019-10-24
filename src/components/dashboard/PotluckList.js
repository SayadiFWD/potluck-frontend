// Libraries
import React from "react";
import { useSelector } from "react-redux";

const PotluckList = () => {
  const currentUser = useSelector(state => state.currentUser);

	return (
		<div>
			<h1>Events</h1>
      {currentUser.events === [] ? currentUser.events.map(event => <div>Events</div>): `No Events`}
		</div>
	);
};

export default PotluckList;
