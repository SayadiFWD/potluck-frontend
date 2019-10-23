//libraries
import React, { useState } from "react";
import { NavLink, Route, Switch } from "react-router-dom";

//components
import SignUpForm from "components/SignUp";
import LoginForm from "components/Login";

const TabsSL = ({match}) => {
	const [clicked, setClicked] = useState("");
 console.log(match.url)
	const clickHandler = () => {
		setClicked(true);
	};

	const className = clicked ? "is-active" : "";

	return (
		<div className='tabs is-centered is-large box'>
			<ul>
				<NavLink className='nav-link' to='/signup'>
					<li className={className} onClick={clickHandler}>
						<a>
							<span className='icon is-small'>
								<i className='fas fa-user-plus' aria-hidden='true'></i>
							</span>
							<span>Sign Up</span>
						</a>
					</li>
				</NavLink>
				<NavLink className='nav-link' to='/login'>
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
					<Route path='/signup' exact render={() => <SignUpForm />} />
					<Route path='/login' exact render={() => <LoginForm />} />
					{/* <Route path='/signup' component={SignUpForm} />
					<Route path='/login' component={LoginForm} /> */}
				</Switch>
			</div>
		</div>
	);
};

export default TabsSL;

{
	/* <div className='sl-tabs box'>
      <div className='ul'>
      <ul>
        <NavLink to='/signup'><li className='is-active'><a>Sign Up</a></li></NavLink>
        <NavLink to='/login'><li><a>Log In</a></li></NavLink>
      </ul>
      </div>
      <div>
        <Route path='/signup' component={SignUpForm}/>
        <Route path='/login' component={LoginForm}/>
      </div>
  </div> */
}
