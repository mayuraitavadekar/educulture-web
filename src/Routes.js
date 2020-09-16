import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./core/Home";
import TestSeriesPage from "./core/TestSeriesPage";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/availabletests" exact component={TestSeriesPage} />
      </Switch>
    </Router>
  );
};

export default Routes;
