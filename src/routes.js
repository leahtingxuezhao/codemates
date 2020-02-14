import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Components/Home";
import EventsMain from "./Components/EventsMain";
import Auth from "./Components/Auth";
import PlaygroundsMain from "./Components/PlaygroundsMain";
import ProjectsMain from "./Components/ProjectsMain";

export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/events" component={EventsMain} />
    <Route exact path="/auth" component={Auth} />
    <Route path="/playgrounds" component={PlaygroundsMain} />
    <Route path="/projects" component={ProjectsMain} />
  </Switch>
);
