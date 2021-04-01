import React, { useState } from "react";
import Button from "react-bootstrap/Button";
function Teams(props) {
  const [teams, setTeams] = useState(0);

  console.log(setTeams);

  return (
    <div>
      <Button onClick={() => setTeams(1)}>1</Button>
      <Button onClick={() => setTeams(2)}>2 </Button>
      <Button onClick={() => setTeams(3)}>3</Button>
      <p> May the best Team out of {teams} win!</p>
    </div>
  );
}

export default Teams;
