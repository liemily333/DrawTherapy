import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Register from "./pages/register";
import "./App.css";
import Login from "./pages/login";
import DrawArea from "./pages/drawarea";
import UserProfile from "./pages/profile";
import UserTable from "./pages/table";
function App() {
  return (
    <Router>
      <Switch>
        <React.Fragment>
          <div>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/profile" component={UserProfile} />
            <Route path="/drawarea" component={DrawArea} />
            <Route path="/UserTable" component={UserTable} />
          </div>
        </React.Fragment>
      </Switch>
    </Router>
  );
}

export default App;
