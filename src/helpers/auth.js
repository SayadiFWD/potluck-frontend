// Libraries
import { Redirect } from "react-router-dom";
import React from "react";
import axios from "axios";

export const axiosWithAuth = () => {
  const token = localStorage.getItem("token");

  return axios.create({
    headers: {
      "Content-Type": "application/json",
      Authorization: `${token}`
    },
    baseURL: "https://potluck-backend.herokuapp.com/"
  });
};

export function WithAuthCheck(Component, props) {
  if (localStorage.getItem("token")) {
    return <Component {...props} />;
  }
  return <Redirect to="/login" />;
}
