// libraries
import React, { useState } from "react";
import { NavLink, Route, Switch } from "react-router-dom";

// components
import SignUpForm from "components/SignUp";
import LoginForm from "components/Login";

const TabsSL = () => {
//fix tab switcher
	const [clicked, setClicked] = useState("");

	const clickHandler = () => {
		setClicked(true);
	};


	const className = clicked ? "is-active" : "";

	return (
		<div className='tabs is-centered is-large box'>
			<ul>
				<NavLink className='nav-link' to={`/landing/signup`}>
					<li className={className} onClick={clickHandler}>
						<a>
							<span className='icon is-small'>
								<i className='fas fa-user-plus' aria-hidden='true'></i>
							</span>
							<span>Sign Up</span>
						</a>
					</li>
				</NavLink>
				<NavLink className='nav-link' to={`/landing/login`}>
					<li className={className} onClick={clickHandler}>
						<a>
							<span className='icon is-small'>
								<i className='fas fa-sign-in-alt' aria-hidden='true'></i>
							</span>
							<span>Log In</span>
						</a>
					</li>
				</NavLink>
			</ul>
			<div>
				<Switch>
					<Route path={`/landing/signup`} component={SignUpForm} />
					<Route path={`/landing/login`} component={LoginForm} />
				</Switch>
			</div>
		</div>
	);
};

export default TabsSL;
