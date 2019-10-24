// libraries
import React, { useState } from "react";
import { NavLink, Route, Switch } from "react-router-dom";

// components
import SignUpForm from "components/SignUp";
import LoginForm from "components/Login";

// actions
import * as actions from 'states/users/usersActions';

// helpers
import {useDispatchThunk} from 'helpers/useDispatchThunk';


const TabsSL = ({match}) => {
  const login = useDispatchThunk(actions.login)
	
	const [clicked, setClicked] = useState("");

	const exact = match.url;

	const clickHandler = () => {
		setClicked(true);
	};

	const className = clicked ? "is-active" : "";

	return (
		<div className='tabs is-centered is-large box'>
			<ul>
				<NavLink className='nav-link' to={`${exact}signup`}>
					<li className={className} onClick={clickHandler}>
						<a>
							<span className='icon is-small'>
								<i className='fas fa-user-plus' aria-hidden='true'></i>
							</span>
							<span>Sign Up</span>
						</a>
					</li>
				</NavLink>
				<NavLink className='nav-link' to={`${exact}login`}>
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
					<Route path={`${exact}signup`} render={() => <SignUpForm />} />
					<Route path={`${exact}login`} render={() => <LoginForm />} />
				</Switch>
			</div>
		</div>
	);
};

export default TabsSL;

// history={props.history} login={props.login}