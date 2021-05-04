import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Counter from "./pages/counter";
import Teams from "./pages/teams";
import Register from "./pages/register";
// import Profile from "./pages/profile";
import "./App.css";
import UserProfile from "./pages/profile";
import NavBar from "./components/navBar/navBar";
import Login from "./pages/login";
import Welcome from "./pages/welcome";
import { createBrowserHistory as history } from "history";
function App(props) {
  const [gameScore, setGameScore] = useState(0);

  console.log(props);
  return (
    <Router history={history}>
      <div>
        <Route path="/welcome" component={Welcome} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/teams" component={Teams} />
        <Route path="/counter" component={Counter} />
        <Route path="/profile" component={UserProfile} />
      </div>
    </Router>
  );
}

export default App;
