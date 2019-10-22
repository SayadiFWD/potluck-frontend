//Libraries
import React from "react";
import "./styles/styles.scss";

//Components
import CreatePotluck from 'components/createpotluckform/CreatePotluck';
import Dash from 'components/dashboard/Dash';
import EventPage from 'components/events/EventPage';
import Footer from 'components/Footer';
import Login from 'components/Login';
import SignUp from 'components/SignUp';
import Header from "components/Header";
import Navigation from 'components/SignUp';

function App() {
  return (
    <div className="App">
      <Header />
      <SignUp />
      <Footer />
      <CreatePotluck/>
      <Dash/>
      <EventPage/>
      <Login/>
      <Navigation/>
    </div>
  );
}

export default App;
