// Libraries
import React, { useState } from "react";
import { useSelector } from "react-redux";

// Actions
import * as actions from "states/events/eventsActions";

// helpers
import { useDispatchThunk } from "helpers/useDispatchThunk";

const EventGuestList = () => {
	const owner = useSelector(state => state.isOwner);
	const selectEvent = useSelector(state => state.closestEvent);
	const [confirmGuest, deleteGuest, addGuest] = useDispatchThunk([
		actions.eventGuestConfirm,
		actions.eventGuestDelete,
		actions.eventGuestAdd
	]);

	const [guestValue, setGuestValue] = useState();

	const guestValueChange = event => {
		setGuestValue(event.target.value);
	};
	const guestOnSubmit = event => {
		event.preventDefault();
		confirmGuest(guestValue);
	};

	const [ownerValue, setOwnerValue] = useState();

	const ownerValueChange = event => {
		setOwnerValue(event.target.value);
	};
	const ownerOnSubmit = event => {
		event.preventDefault();
		addGuest(ownerValue);
	};

	return (
		<div>
			<form onSubmit={guestOnSubmit}>
				{!owner && <h1>Select Your Name</h1>}
				{selectEvent.guest
					? selectEvent.guest.split(",").map((guest, index) => (
							<div>
								<input
									type='checkbox'
									name={guest}
									onChange={guestValueChange}
									value={guest}>
									{guest}
								</input>
								{owner && (
									<button
										onClick={() => {
											deleteGuest(guest);
										}}>
										Delete
									</button>
								)}
							</div>
					  ))
					: "Add Guest"}
				{!owner && <button type='submit'>Submit</button>}
				{owner && (
					<form onSubmit={ownerOnSubmit}>
						<input type='text' onChange={ownerValueChange} value={ownerValue} />
						<button>Add</button>
					</form>
				)}
			</form>
		</div>
	);
};

export default EventGuestList;
