const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
//cross platform sending info from front end to backend

app.use(express.json());
app.use(cors());

//connecting to mysql database
const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "Minkyoung!1017",
  database: "scoreTracker",
});

db.connect(function (err) {
  if (err) {
    return console.error("error connecting database");
  }
  console.log("connected to mysql server");
});

app.listen(3000, () => {
  console.log("server running on 3000");
});

//post request for register information to be posted onto database
app.post("/register", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  db.query(
    "INSERT INTO user (username, password) VALUES (?,?)",
    [username, password],
    (err, result) => console.log(err)
  );
});

app.post("/login", (req, res) => {
  const username = req.body.usernameLogin;
  const password = req.body.passwordLogin;

  db.query(
    "SELECT * FROM users WHERE username= ? AND password = ?",
    [usernameLogin, passwordLogin],
    (err, result) => {
      if (err) {
        res.send({ err: err });
      } else {
        if (result) {
          res.send(result);
        } else {
          res.send({ message: "wrong username and password" });
        }
      }
    }
  );
});
