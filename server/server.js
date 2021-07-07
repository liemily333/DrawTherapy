const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
//cross platform sending info from front end to backend

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

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

app.get("/", (req, res) => {
  res.json({ message: "Welcome to scoreTracker" });
});

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
