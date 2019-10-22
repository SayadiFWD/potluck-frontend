// Libraries
import React from 'react';

// Components
import EventFoodList from 'components/events/EventFoodList';
import EventGuestList from 'components/events/EventGuestList';
import PotluckInfo from 'components/events/PotluckInfo';

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