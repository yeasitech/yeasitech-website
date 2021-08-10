import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "../pages/Home";

const Routing = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="">
          <Redirect to="/" />
        </Route>
      </Switch>
    </Router>
  );
};
export default Routing;
