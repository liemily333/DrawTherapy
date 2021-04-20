import React, { useState } from "react";
import savebutton from "../components/saveButton/save";

function Counter(props) {
  const [score, setScore] = useState(0);
  const [score1, setScore1] = useState(0);
  console.log(score);
  return (
    <div>
      <div className="team">
        <p> Score: {score}</p>
        <button onClick={() => setScore(score + 1)}>+</button>
        <button onClick={() => setScore(score - 1)}>-</button>
      </div>
      <div className="team1">
        <p> Score: {score1}</p>
        <button onClick={() => setScore1(score1 + 1)}>+</button>
        <button onClick={() => setScore1(score1 - 1)}>-</button>
      </div>
    </div>
  );
}

export default Counter;
