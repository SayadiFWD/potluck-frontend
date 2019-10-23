// Libraries
import React, {useEffect} from "react";
import { useSelector,  useDispatch } from "react-redux";

// Actions 
import * as actions from 'states/users/usersActions'

const Dashboard = () => {
  const currentUser = useSelector(state => state.currentUser);

  const eventList = useSelector(state => state.eventsList);
  
  let dispatch = useDispatch();
    
  useEffect(()=>{
    dispatch(actions.getUserWithEvents())
  },[dispatch]);

  return (
    <div>
      <div>HEELLLOOOOOO to MY Dashboard</div>
      <p>{JSON.stringify(currentUser)}</p>
      <p>{JSON.stringify(eventList)}</p>
    </div>
  );
};

export default Dashboard;
