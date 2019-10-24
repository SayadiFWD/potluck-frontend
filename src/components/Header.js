// Libraries
import React from "react";
import { NavLink } from "react-router-dom";

// Components
import logo from "assets/logo.png";

// helpers
import { useDispatchThunk } from "helpers/useDispatchThunk";

// actions
import * as actions from "states/users/usersActions";

const Header = () => {
	let logout = useDispatchThunk(actions.logout);
	return (
		<header>
			<img src={logo} alt='feast logo' />
			<nav>
				<ul>
					<a href='#'>
						<li>About</li>
					</a>
					<a href='#'>
						<li>Contact</li>
					</a>
					<NavLink
						to='/'
						className={`auth${localStorage.getItem("token") ? "success" : ""}`}
						onClick={logout}>
						<li>Sign Out</li>
					</NavLink>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
