// Libraries
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

// Actions
import * as actions from "states/users/usersActions";

// helpers
import { useDispatchThunk } from "helpers/useDispatchThunk";

// components
import PotluckCard from 'components/dashboard/PotluckCard';
import PotluckList from 'components/dashboard/PotluckList';

const Dashboard = props => {
	const currentUser = useSelector(state => state.currentUser);

	const getUserInfo = useDispatchThunk(actions.getUserWithEvents)

	useEffect(() => {
		getUserInfo(localStorage.getItem("id"))
	}, [getUserInfo]);

	return (
		<div>
			<p>{JSON.stringify(currentUser)}</p>
			<button onClick={()=>{props.hisotry('/potluckform')}}>Create Event</button>
			<PotluckCard/>
			<PotluckList/>
		</div>
	);
};

export default Dashboard;
