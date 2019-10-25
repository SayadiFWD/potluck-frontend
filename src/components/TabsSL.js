// libraries
import React, { useState } from "react";
import { Link, Route, Switch } from "react-router-dom";

// components
import SignUpForm from "components/SignUp";
import LoginForm from "components/Login";

const TabsSL = ({match}) => {

	
	const [clicked, setClicked] = useState("");

	const exact = match.url;

	const clickHandler = () => {
		setClicked(true);
	};


	const className = clicked ? "is-active" : "";

	return (
	<div className='box'>
		<div class="tabs is-toggle is-medium is-fullwidth">
			<ul>	
				<li className={className} onClick={clickHandler}>
					<Link className='nav-link' to={`${exact}signup`}>
						<span class="icon is-small"><i class="fas fa-user-plus" aria-hidden="true"></i></span>
						<span>Sign Up</span>
					</Link>
				</li>
				<li >
					<Link className='nav-link' to={`${exact}login`}>
						<span class="icon is-small"><i class="fas fa-sign-in-alt" aria-hidden="true"></i></span>
						<span>Log In</span>
					</Link>	
				</li>
			</ul>
			<div>
				<Switch>
					<Route path={`${exact}signup`} component={SignUpForm} />
					<Route path={`${exact}login`} component={LoginForm} />
				</Switch>
			</div>
		</div>
	</div>	
	);
};

export default TabsSL;
