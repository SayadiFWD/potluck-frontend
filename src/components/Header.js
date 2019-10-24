// Libraries
import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

// Components
import logo from "assets/logo.png";

// helpers
import { useDispatchThunk } from "helpers/useDispatchThunk";

// actions
import * as actions from "states/users/usersActions";

const Header = () => {
	let logout = useDispatchThunk(actions.logout);
	const currentUser = useSelector(state => state.currentUser);

	return (
		<header>
			<img src={logo} alt='feast logo' />
			<nav>
				<ul>
				{currentUser.authorized && (
						<NavLink key={currentUser.authorized} to='/dashboard'>
							<li>Dashboard</li>
						</NavLink>
					)}
					<a href='https://hungry-carson-80f324.netlify.com/index.html'>
						<li>About</li>
					</a>
					<a href='https://hungry-carson-80f324.netlify.com/about.html'>
						<li>Contact</li>
					</a>
					{currentUser.authorized && (
						<NavLink key={currentUser.authorized} to='/' onClick={logout}>
							<li>Sign Out</li>
						</NavLink>
					)}
				</ul>
			</nav>
		</header>
	);
};

export default Header;
