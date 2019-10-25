// Libraries
import React, { useState } from "react";
import { useSelector } from "react-redux";

// Actions
import * as actions from "states/events/eventsActions";

// helpers
import { useDispatchThunk } from "helpers/useDispatchThunk";

export const PotluckInfo = () => {
	const owner = useSelector(state => state.isOwner);
	const selectEvent = useSelector(state => state.closestEvent);
	const editEvent = useDispatchThunk(actions.eventInfoEdit)

	const [values, setValues] = useState({
		event_name: `${selectEvent.event_name}`,
		dates: `${selectEvent.dates}`,
		time: `${selectEvent.time}`,
		location: `${selectEvent.location}`
	});

	const onSubmit = event => {
		event.preventDefault();
		editEvent(values, selectEvent.id)
	};

	const valueChange = event => {
		setValues({ ...values, [event.target.name]: event.target.value });
	};

	return (
		<div>
			{!owner && (
				<div>
					<p>Event Name: {selectEvent.event_name}</p>
					<p>Date: {selectEvent.dates}</p>
					<p>Time: {selectEvent.time}</p>
					<p>Location: {selectEvent.location}</p>
				</div>
			)}
			{owner && (
				<form onSubmit={onSubmit}>
					<h1>Event</h1>
					Event Name:{" "}
					<input
						type='text'
						name='event_name'
						onChange={valueChange}
						value={values.event_name}
					/>
					Date:{" "}
					<input
						type='date'
						name='dates'
						onChange={valueChange}
						value={values.dates}
					/>
					Time:{" "}
					<input
						type='time'
						name='time'
						onChange={valueChange}
						value={values.time}
					/>
					Location:{" "}
					<input
						type='text'
						name='location'
						onChange={valueChange}
						value={values.location}
					/>
					<button type='submit'>Edit</button>
				</form>
			)}
		</div>
	);
};

export default PotluckInfo;
