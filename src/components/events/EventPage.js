// Libraries
import React from 'react';

// Components
import EventFoodList from 'EventFoodList';
import EventGuestList from 'EventGuestList';
import PotluckInfo from 'PotluckInfo';

const EventPage = () => {
	return (
  <div>
    <EventFoodList/>
    <EventGuestList/>
    <PotluckInfo/>
  </div>
  );
};


export default EventPage;