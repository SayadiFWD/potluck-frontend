// Libraries
import React from "react";
import { useSelector } from "react-redux";

// helpers
import { useDispatchThunk } from "helpers/useDispatchThunk";

// Actions
import * as actions from "states/events/eventsActions";

const GuestCard = props => {
	const owner = useSelector(state => state.isOwner);
	const [selectGuestDelete, closestGuestDelete] = useDispatchThunk([
		actions.selectGuestDelete,
		actions.closestGuestDelete
	]);
	const currentDelete = props.props
		? selectGuestDelete
		: closestGuestDelete;
	return (
		<div>
			<input type='checkbox' name={props.guest} value={props.guest}>
				{props.guest}
			</input>
			{owner && (
				<button
					onClick={() => {
						currentDelete(props.guest);
					}}>
					Delete
				</button>
			)}
		</div>
	);
};

export default GuestCard;
