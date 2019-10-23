// Libraries
import React from "react";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const currentUser = useSelector(state => state.currentUser);
  const eventList = useSelector(state => state.eventsList);
  return (
    <div>
      <div>HEELLLOOOOOO to MY Dashboard</div>
      <p>{JSON.stringify(currentUser)}</p>
      <p>{JSON.stringify(eventList)}</p>
    </div>
  );
};

export default Dashboard;
