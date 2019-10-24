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
import CreateFoodList from "components/createpotluckform/CreateFoodList";
import InviteGuest from "components/createpotluckform/InviteGuest";

function App() {
	return (
		<div className='App'>
			<Header />
			<Switch>
				<Route path='/potluckform' component={CreatePotluckForm} />
				<Route exact path='/dashboard' component={Dashboad} />
				<Route path='/' component={TabsSL} />
				<Route path='/foodform' component={CreateFoodList} />
				<Route path='/inviteguests' component={InviteGuest} />
			</Switch>
			<Footer />
		</div>
	);
}

export default App;
