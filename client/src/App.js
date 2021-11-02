import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Register from "./pages/register";
import "./App.css";
import Login from "./pages/login";
import DrawArea from "./pages/drawarea";
import About from "./pages/about";
import AllDrawings from "./pages/allDrawings";

function App() {
  return (
    <Router>
      <Switch>
        <React.Fragment>
          <div>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/drawarea" component={DrawArea} />
            <Route path="/About" component={About} />
            <Route path="/AllDrawings" component={AllDrawings} />
          </div>
        </React.Fragment>
      </Switch>
    </Router>
  );
}

export default App;
