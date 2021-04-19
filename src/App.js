import React, { useState } from "react";
import Counter from "./pages/counter";
import Teams from "./pages/teams";
import "./App.css";

function App(props) {
  // const [teams, setTeams] = useState(0);
  // const [teamName, setTeamName] = useState(0);

  console.log(props);
  return (
    <div>
      <div className="Header">
        <p> start play!</p>
      </div>
      <div className="main">
        <Teams></Teams>
        <Counter></Counter>
      </div>
    </div>
  );
}

export default App;
