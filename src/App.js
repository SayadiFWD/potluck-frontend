//Libraries
import React from "react";
import "./styles/styles.scss";

//Components
// import CreatePotluck from './component/createpotluckform/CreatePotluck';
// import Dash from './component/dashboard/Dash';
// import EventPage from './component/events/EventPage';
// import Footer from './component/Footer';
// import Login from './component/Login';
// import SignUp from './component/SignUp';
import Header from "component/Header";
import Footer from "component/Footer";
import SignUp from "component/SignUp";

function App() {
  return (
    <div className="App">
      <Header />
      <SignUp />
      <Footer />
    </div>
  );
}

export default App;
