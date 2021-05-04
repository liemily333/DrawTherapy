import React, { useState } from "react";
import savebutton from "../components/saveButton/save";
import "./style.css";
import Axios from "axios";

function Counter(props) {
  const [score1, setScore1] = useState(0);
  const [score2, setScore2] = useState(0);
  const [name1, setname1] = useState("");
  const [name2, setname2] = useState("");

  const onChangeHandler1 = (event) => {
    setname1(event.target.value);
  };

  const onChangeHandler2 = (event) => {
    setname2(event.target.value);
  };

  console.log(name1);
  console.log(name2);
  console.log(score1);
  console.log(score2);

  const saveGame = () => {
    Axios.post("http://localhost:3000/gameInformation", {
      name1: name1,
      name2: name2,
      score1: score1,
      score2: score2,
    }).then((response) => {
      console.log("game sucessfully saved" + response);
    });
  };

  return (
    <div>
      <div className="header">
        <h1> "Be Fair, Play Hard" </h1>
      </div>
      <div className="team">
        <input
          type="text"
          onChange={onChangeHandler1}
          placeholder="player 1 Name"
        />
        <p> Score: {score1}</p>
        <button onClick={() => setScore1(score1 + 1)}>+</button>
        <button onClick={() => setScore1(score1 - 1)}>-</button>
      </div>
      <div className="team1">
        <input
          type="text"
          onChange={onChangeHandler2}
          placeholder="player 2 Name"
        />
        <p> Score: {score2}</p>
        <button onClick={() => setScore2(score2 + 1)}>+</button>
        <button onClick={() => setScore2(score2 - 1)}>-</button>
      </div>
      <div className="saveButton">
        <button onClick={saveGame}>save game</button>
      </div>
    </div>
  );
}

export default Counter;
