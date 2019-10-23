//Libraries
import React from "react";
import { Route, Switch } from "react-router-dom";
import "./styles/styles.scss";

//Components
import Dashboad from "components/dashboard/Dashboad";
import Footer from "components/Footer";
import TabsSL from "components/TabsSL";
import Header from "components/Header";
import CreatePotluckForm from "components/createpotluckform/CreatePotluck";
import CreateFoodListForm from "components/createpotluckform/CreateFoodList";

function App() {
  return (
    <div className="App">
      <Header />
      <Route path="/potluckform" component={CreatePotluckForm} />
      <Switch>
        <Route exact path="/dashboard" component={Dashboad} />
        <Route exact path="/" component={TabsSL} />
        <Route path="/foodform" component={CreateFoodListForm} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
