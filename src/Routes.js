import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./core/Home";
import TestSeriesPage from "./core/TestSeriesPage";
import AdminRoutes from "./core/AdminRoutes";
import AdminDashboard from "./admin/AdminDashboard";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/availabletests" exact component={TestSeriesPage} />
        <AdminRoutes path="/admin" exact component={AdminDashboard} />
      </Switch>
    </Router>
  );
};

export default Routes;
