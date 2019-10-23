// Libraries
import React from "react";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const user = useSelector(state => state.user);
  return (
    <div>
      <div>HEELLLOOOOOO to MY Dashboard</div>
      <p>{JSON.stringify(user)}</p>
    </div>
  );
};

export default Dashboard;
