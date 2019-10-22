// Libraries
import React from 'react';

const EventFoodList = props => {
	return (
  <div>
			{props.map((foodItem, index) => (
				<FoodItem key={index} foodItem={foodItem} />
			))}
  </div>
  );
};


export default EventFoodList;