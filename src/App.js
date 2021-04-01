import React, { useState } from "react";
import Counter from "./pages/counter";
import Teams from "./pages/teams";

function App(props) {
  // const [teams, setTeams] = useState(0);
  // const [teamName, setTeamName] = useState(0);

  console.log(props);
  return (
    <div>
      <Teams></Teams>
      <Counter></Counter>
    </div>
  );
}

export default App;
