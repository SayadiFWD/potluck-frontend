//Libraries
import React from "react";
import "./styles/styles.scss";

//Components
import CreatePotluck from 'components/createpotluckform/CreatePotluck';
import Dash from 'components/dashboard/Dash';
import EventPage from 'components/events/EventPage';
import Footer from 'components/Footer';
import TabsSL from 'components/TabsSL'
import Header from 'components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <TabsSL />
      <Footer />
      {/* <CreatePotluck/>
      <Dash/>
      <EventPage/> */}
    </div>
  );
}

export default App;
