// Libraries
import React from 'react';
import { useSelector } from "react-redux";

// Components 
import FoodItem from 'components/events/FoodItem';

const EventFoodList = () => {
	const currentEvent = useSelector(state => state.currentEvent);
	// if a person id matches the event ID then dont show submit button
	// if it doesnt then show submit button
	// eventfoodList needs to be a form
	// add edit delete onclick a box appears for a person with auth
	return (
  <div>
			{currentEvent.food? currentEvent.food.map((foodItem, index) => (
				<FoodItem key={index} foodItem={foodItem} />
			)):'Add Food'}
  </div>
  );
};


export default EventFoodList;