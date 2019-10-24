// Libraries
import React from 'react';
import { useSelector } from "react-redux";

// Components 
import GuestCard from 'components/events/GuestCard';

const EventGuestList = () => {
	const currentEvent = useSelector(state => state.currentEvent);

	return (
  <div>
			{currentEvent.guest? currentEvent.guest.map((guest, index) => (
				<GuestCard key={index} guest={guest} />
			)) : 'Add Guest'}
  </div>
  );
};


export default EventGuestList;