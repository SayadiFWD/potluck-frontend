//Libraries
import React from "react";
import { Route, Switch, Redirect} from "react-router-dom";
import "./styles/styles.scss";

//Components
import Dashboard from "components/dashboard/Dashboard";
import Footer from "components/Footer";
import TabsSL from "components/TabsSL";
import Header from "components/Header";
import CreatePotluckForm from "components/createpotluckform/CreatePotluck";
import CreateFoodList from "components/createpotluckform/CreateFoodList";
import InviteGuest from "components/createpotluckform/InviteGuest";

// helpers 
import PrivateRoute from 'helpers/PrivateRoute'

function App() {
	return (
		<div className='App'>
			<Header />
			<Switch>
				<Route path='/landing' component={TabsSL} />
				<PrivateRoute exact path='/dashboard'  component={Dashboard}/>
				<PrivateRoute exact path='/potluckform'  component={CreatePotluckForm}/>
				<PrivateRoute exact path='/foodform'  component={CreateFoodList}/>
				<PrivateRoute exact path='/inviteguests'  component={InviteGuest}/>
				<Redirect from='/' to='/dashboard' />
			</Switch>
	
			<Footer />
		</div>
	);
}

export default App;
