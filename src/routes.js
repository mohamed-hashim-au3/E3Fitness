import React from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";
import ScrollTop from "./ScrollTop";
import HomePage from "./components/HomePage";
import AboutUs from "./containers/AboutsUs";
import Trainers from "./containers/TrainersPage";
import PowerClass from "./containers/PowerClass";
import SeniorClass from "./containers/SeniorClass";
import YouthClass from "./containers/YouthClass";
// import NoMatch from "./components/NoMatch";

const Routes = () => {
  return (
    <Router>
      <ScrollTop />
      <Route exact path="/" component={HomePage} />
      <Route exact path="/aboutus" component={AboutUs} />
      <Route exact path="/trainers" component={Trainers} />
      <Route exact path="/classes/power_class" component={PowerClass} />
      <Route exact path="/classes/senior_class" component={SeniorClass} />
      <Route exact path="/classes/youth_class" component={YouthClass} />
    </Router>
  );
};

export default Routes;
