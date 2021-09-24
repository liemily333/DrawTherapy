import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useHistory } from "react-router-dom";

function Login() {
  const [usernameLogin, setUserNameLogin] = useState("");
  const [passwordLogin, setPasswordLogin] = useState("");

  const history = useHistory();
  const login = () => {
    Axios.post("http://localhost:3005/login", {
      username: usernameLogin,
      password: passwordLogin,
    }).then((response) => {
      console.log(response);
    });
  };

  function registerPage() {
    history.push("/register");
  }

  return (
    <div>
      <div className="login">
        <h1> Login</h1>
        <label>userName</label>
        <input
          type="text"
          onChange={(e) => {
            setUserNameLogin(e.target.value);
          }}
        />
        <label>password</label>
        <input
          type="text"
          onChange={(e) => {
            setPasswordLogin(e.target.value);
          }}
        />
        <button onClick={login}> Login</button>
        <button onClick={registerPage}> Sign Up</button>
      </div>
    </div>
  );
}

export default Login;
