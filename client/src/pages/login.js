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
    <div className="login">
      <div className="loginContent">
        <h1 className="font-loader"> Login</h1>
        <br></br>
        <input
          type="text"
          placeholder="username"
          onChange={(e) => {
            setUserNameLogin(e.target.value);
          }}
        />
        <br></br>
        <input
          type="text"
          placeholder="password"
          onChange={(e) => {
            setPasswordLogin(e.target.value);
          }}
        />
        <br></br>
        <div className="loginButtons">
          <button onClick={login}> Login</button>
          <button onClick={registerPage}> Register </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
