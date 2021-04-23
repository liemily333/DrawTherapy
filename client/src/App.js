import React, { useState } from "react";
import Counter from "./pages/counter";
import Teams from "./pages/teams";
import Register from "./pages/register";
// import Profile from "./pages/profile";
import "./App.css";
import UserProfile from "./pages/profile";
import NavBar from "./components/navBar/navBar";

function App(props) {
  // const [teams, setTeams] = useState(0);
  // const [teamName, setTeamName] = useState(0);

  console.log(props);
  return (
    <div>
      <Register></Register>
      <div className="main">
        <Teams></Teams>
        <Counter></Counter>
        <UserProfile></UserProfile>
      </div>
    </div>
  );
}

export default App;
