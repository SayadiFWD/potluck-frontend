// Libraries
import React from "react";
import { useSelector } from "react-redux";

// helpers
import { useDispatchThunk } from "helpers/useDispatchThunk";

// Actions
import * as actions from "states/events/eventsActions";

const FoodItem = props => {
  const owner = useSelector(state => state.isOwner);
	const deleteFood = useDispatchThunk(actions.eventFoodDelete);
  const foodObject = props.foodItem;
  return (
    <div>
			<input type='checkbox' name={foodObject.food_item} value={props.foodItem}>
				{foodObject.food_item}
			</input>
			{owner && (
				<button
					onClick={() => {
						deleteFood(props.foodItem);
					}}>
					Delete
				</button>
			)}
    </div>
  );
}

export default FoodItem;