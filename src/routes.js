import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Components/Home";
import EventsMain from "./Components/EventsMain";
import Auth from "./Components/Auth";
import PlaygroundsMain from "./Components/PlaygroundsMain";
import ProjectsMain from "./Components/ProjectsMain";
import NewPost from "./Components/NewPost";
import NewProject from "./Components/NewProject";
import BigPost from "./Components/BigPost";
import BigProject from "./Components/BigProject";

export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/events" component={EventsMain} />
    <Route exact path="/auth" component={Auth} />
    <Route path="/playgrounds" component={PlaygroundsMain} />
    <Route path="/projects" component={ProjectsMain} />
    <Route path="/newpost" component={NewPost} />
    <Route path="/newproject" component={NewProject} />
    <Route path="/post/:id" component={BigPost} />
    <Route path="/project/:id" component={BigProject} />
  </Switch>
);
