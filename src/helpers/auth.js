// Libraries
import { Redirect } from "react-router-dom";
import React from "react";
import axios from "axios";

export const axiosWithAuth = () => {
//   const token = localStorage.getItem("token");
// ${token}


  return axios.create({
    headers: {
      "Content-Type": "application/json",
      Authorization: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0Ijo1LCJlbWFpbCI6ImJwb2x0bEBnbWFpbC5jb20iLCJpYXQiOjE1NTU5NzAyMjMsImV4cCI6MTU1NjA1NjYyM30.lWi9hhalGt2ftr4Ju_jP12dCavZgXAMwABGYPzltwr8`
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
