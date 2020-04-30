import React from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";
import ScrollTop from "./ScrollTop";
import HomePage from "./components/HomePage";
import AboutUs from "./containers/AboutsUs";
// import NoMatch from "./components/NoMatch";

const Routes = () => {
  return (
    <Router>
      <ScrollTop />
      <Route exact path="/" component={HomePage} />
      <Route exact path="/aboutus" component={AboutUs} />
    </Router>
  );
};

export default Routes;
