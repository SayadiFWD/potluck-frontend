// Libraries
import React, { useState } from "react";
import { useSelector } from "react-redux";

// Actions
import * as actions from "states/events/eventsActions";

// helpers
import { useDispatchThunk } from "helpers/useDispatchThunk";

const EventFoodList = () => {
	const owner = useSelector(state => state.isOwner);
	const selectEvent = useSelector(state => state.closestEvent);

	const confirmFood = useDispatchThunk(actions.eventFoodGuestPick)
	const deleteFood = useDispatchThunk(actions.eventFoodDelete)
	const addFood = useDispatchThunk(actions.eventFoodAdd)

	const [guestValue, setGuestValue] = useState();

	const guestValueChange = event => {
		setGuestValue(event.target.value);
	};
	const guestOnSubmit = event => {
		event.preventDefault();
		confirmFood(guestValue);
	};

	const [ownerValue, setOwnerValue] = useState();

	const ownerValueChange = event => {
		setOwnerValue(event.target.value);
	};
	const ownerOnSubmit = event => {
		event.preventDefault();
		addFood(ownerValue);
	};
	

	return (
		<div>
			<form onSubmit={guestOnSubmit}>
			{!owner && <h1>Select Your Food Item</h1>}
			{selectEvent.food
				? selectEvent.food.map((foodItem, index) => (
					<div>
					<input type='checkbox' onChange={guestValueChange} name={foodItem.food_item} value={foodItem}>
						{foodItem.food_item}
					</input>
					{owner && (
						<button
							onClick={() => {
								deleteFood(foodItem);
							}}>
							Delete
						</button>
					)}
				</div>
				  ))
				: "Add Food"}
				{!owner && <button type='submit'>Submit</button>}
				</form>
				{owner && (
					<form onSubmit={ownerOnSubmit}>
						<input type='text' onChange={ownerValueChange} value={ownerValue} />
						<button>Add</button>
					</form>
				)}
		</div>
	);
};

export default EventFoodList;
