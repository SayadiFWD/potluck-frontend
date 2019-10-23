//Libraries
import React from "react";
import { Route, Switch } from "react-router-dom";
import "./styles/styles.scss";

//Components
import Dashboad from "components/dashboard/Dashboad";
import Footer from "components/Footer";
import TabsSL from "components/TabsSL";
import Header from "components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/dashboard" component={Dashboad} />
        <Route path="/" component={TabsSL} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
