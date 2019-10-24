//libraries
import React, { useState } from "react";
import { NavLink, Route } from "react-router-dom";

//components
import SignUpForm from "components/SignUp";
import LoginForm from "components/Login";

const TabsSL = () => {
  const [clicked, setClicked] = useState("");

  const clickHandler = () => {
    setClicked(true);
  };

  const className = clicked ? "is-active" : "";

  return (
    <div className="tabs is-centered is-large box">
      <ul>
        <NavLink className="nav-link" to="/signup">
          <li className={className} onClick={clickHandler}>
              <span className="icon is-small">
                <i className="fas fa-user-plus" aria-hidden="true"></i>
                <span>Sign Up</span>
              </span>
          </li>
        </NavLink>
        <NavLink className="nav-link" to="/login">
          <li className={className} onClick={clickHandler}>
              <span className="icon is-small">
                <i className="fas fa-sign-in-alt" aria-hidden="true"></i>
              </span>
              <span>Log In</span>
          </li>
        </NavLink>
      </ul>
      <div>
        <Route path="/signup" component={SignUpForm} />
        <Route path="/login" component={LoginForm} />
      </div>
    </div>
  );
};

export default TabsSL;


