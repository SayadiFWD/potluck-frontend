//Libraries
import React from "react";
import { Route, Switch} from "react-router-dom";
import "./styles/styles.scss";

//Components
import Dashboad from "components/dashboard/Dashboad";
import Footer from "components/Footer";
import TabsSL from "components/TabsSL";
import Header from "components/Header";
import CreatePotluckForm from "components/createpotluckform/CreatePotluck";
import CreateFoodListForm from "components/createpotluckform/CreateFoodList";
import InviteGuestForm from "components/createpotluckform/InviteGuest";

// helpers 
import {WithAuthCheck} from 'helpers/auth'

function App() {
	return (
		<div className='App'>
			<Header />
			{/* <Route path='/foodform' component={CreateFoodListForm} />
			<Route path='/potluckform' component={CreatePotluckForm} />
			<Route path='/inviteguests' component={InviteGuestForm} /> */}

			<Switch>
				<Route path='/potluckform' component={CreatePotluckForm} />
				<Route exact path='/dashboard'  render={props => WithAuthCheck(Dashboad, props)} />
				<Route path='/' component={TabsSL} />
				<Route path='/foodform' component={CreateFoodListForm} />
				<Route path='/inviteguests' component={InviteGuestForm} />
			</Switch>
			<Footer />
		</div>
	);
}

export default App;
