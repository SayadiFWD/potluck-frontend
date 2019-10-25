// Libraries
import React from 'react';
// import { useSelector } from "react-redux";

// Components 
import GuestCard from 'components/events/GuestCard';

const EventGuestList = () => {

	// if a person id matches the event ID then dont show submit button
	// if it doesnt then show submit button
	// eventfoodList needs to be a form
	// add edit delete onclick a box appears for a person with auth
	return (
  <div>
			{/* {currentEvent.guest? currentEvent.guest.map((guest, index) => (
				<GuestCard key={index} guest={guest} />
			)) : 'Add Guest'} */}
  </div>
  );
};


export default EventGuestList;