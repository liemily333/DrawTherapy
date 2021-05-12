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

app.listen(3002, () => {
  console.log("server running");
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
  const username = req.body.username;
  const password = req.body.password;

  db.query(
    "SELECT * FROM user WHERE username = ? AND password = ?",
    [username, password],

    (err, result) => {
      if (err) {
        res.send({ err: err });
      }

      if (result.length > 0) {
        res.send(result);
      } else {
        res.send({ message: "wrong username and password" });
      }
    }
  );
});

app.post("/gameInformation", (req, res) => {
  const name1 = req.body.name1;
  const name2 = req.body.name2;
  const score1 = req.body.score1;
  const score2 = req.body.score2;

  db.query(
    "INSERT INTO game (name1,name2,score1,score2) VALUES (?,?,?,?)",
    [name1, name2, score1, score2],
    (err, result) => console.log(err)
  );
});
