import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Counter from "./pages/counter";
import Teams from "./pages/teams";
import Register from "./pages/register";
// import Profile from "./pages/profile";
import "./App.css";
import UserProfile from "./pages/profile";
import NavBar from "./components/navBar/navBar";
import Login from "./pages/login";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();
function App(props) {
  const [gameScore, setGameScore] = useState(0);

  console.log(props);
  return (
    <Router history={history}>
      <Switch>
        <div>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/teams" component={Teams} />
          <Route path="/counter" component={Counter} />
          <Route path="/profile" component={UserProfile} />
        </div>
      </Switch>
    </Router>
  );
}

export default App;
