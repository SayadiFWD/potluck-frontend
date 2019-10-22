// Libraries
import React from 'react';

const EventGuestList = props => {
	return (
  <div>
			{props.map((guest, index) => (
				<Guest key={index} guest={guest} />
			))}
  </div>
  );
};


export default EventGuestList;