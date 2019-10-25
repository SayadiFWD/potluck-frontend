// Libraries
import React, {useState} from "react";
import { useSelector } from "react-redux";

// Components
import GuestCard from "components/events/GuestCard";

const EventGuestList = props => {
	const closestEvent = useSelector(state => state.closestEvent);
	const owner = useSelector(state => state.isOwner);
	const selectEvent = useSelector(state => state.closestEvent);

	const event = props ? selectEvent : closestEvent;

	const [value, setValue] = useState();

	const valueChange = event => {
		setValue(event.target.value);
	};

	return (
		<div>
			<form>
				{!owner && <h1>Select Your Name</h1>}
				{event.guest
					? event.guest
							.split(",")
							.map((guest, index) => <GuestCard props={props} key={index} guest={guest} />)
					: "Add Guest"}
				{owner && (
					<div>
						<input type='text' onChange={valueChange} value={value} />
						<button>Add</button>
					</div>
				)}
				{!owner && <button type='submit'>Submit</button>}
			</form>
		</div>
	);
};

export default EventGuestList;
