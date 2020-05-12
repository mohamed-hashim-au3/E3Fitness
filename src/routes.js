import React from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";
import ScrollTop from "./ScrollTop";
import HomePage from "./containers/Home";
import AboutUs from "./containers/AboutsUs";
import Trainers from "./containers/TrainersPage";
import PowerClass from "./containers/PowerClass";
import SeniorClass from "./containers/SeniorClass";
import YouthClass from "./containers/YouthClass";
import PowerZone from "./containers/PowerZone";
import PowerHit from "./containers/PowerHit";
import PowerDance from "./containers/PowerDance";
import PowerCardio from "./containers/PowerCardio";
import PowerZen from "./containers/PowerZen";
import BlogPage from "./containers/BlogPage";
import ShopPage from "./containers/ShopPage";
import CreateCourse1 from "./containers/InstructorAccountsSection/InstructorCreateCourse1";
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
      <Route
        exact
        path="/classes/power_class/power_zone"
        component={PowerZone}
      />
      <Route exact path="/classes/power_class/power_hit" component={PowerHit} />
      <Route
        exact
        path="/classes/power_class/power_dance"
        component={PowerDance}
      />
      <Route
        exact
        path="/classes/power_class/power_cardio"
        component={PowerCardio}
      />
      <Route exact path="/classes/power_class/power_zen" component={PowerZen} />
      <Route exact path="/blogs" component={BlogPage} />
      <Route exact path="/shop" component={ShopPage} />
      <Route exact path="/user/createcourse/1" component={CreateCourse1} />
    </Router>
  );
};

export default Routes;
