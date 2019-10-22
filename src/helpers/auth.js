// Libraries
import { Redirect } from "react-router-dom";
import React from 'react';
import axios from 'axios';


export const UseAxiosWithAuth = () => {
	const token = localStorage.getItem("token");

	return axios.create({
		headers: {
			"Content-Type": "application/json",
			Authorization: `${token}`
		}
	});
};

export function WithAthCheck(Component, props) {
  if (localStorage.getItem('token')) {
    return <Component {...props} />
  }
  return <Redirect to='/login' />;
}