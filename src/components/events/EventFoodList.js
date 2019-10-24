// Libraries
import React from 'react';
import { useSelector } from "react-redux";

// Components 
import FoodItem from 'components/events/FoodItem';

const EventFoodList = () => {
	const currentEvent = useSelector(state => state.currentEvent);

	return (
  <div>
			{currentEvent.food? currentEvent.food.map((foodItem, index) => (
				<FoodItem key={index} foodItem={foodItem} />
			)):'Add Food'}
  </div>
  );
};


export default EventFoodList;