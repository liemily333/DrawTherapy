import React, { useState } from "react";
import Axios from "axios";
import { useHistory } from "react-router-dom";
import counter from "./counter";

function Register() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  console.log(username);

  const history = useHistory();

  function handleClick() {
    history.push("/counter");
    register();
  }

  const switchPage = () => {
    history.push("/counter");
  };

  //when the button is clicked, it sends the register information to the back end.
  const register = () => {
    Axios.post("http://localhost:3000/register", {
      username: username,
      password: password,
    }).then((response) => {
      console.log(response);
    });
  };

  return (
    <div className="register">
      <h1> Register</h1>
      <label>userName</label>
      <input
        type="text"
        onChange={(e) => {
          setUserName(e.target.value);
        }}
      />
      <label> password</label>
      <input
        type="text"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button onClick={handleClick}>Register</button>
    </div>
  );
}

export default Register;
