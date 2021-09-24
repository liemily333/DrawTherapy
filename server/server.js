const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const cors = require("cors");
const passport = require("passport");

const app = express();
//cross platform sending info from front end to backend

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(passport.initialize());
app.use(passport.session());

//connecting to mysql database
const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "Minkyoung!1017",
  database: "drawUsers",
});

db.connect(function (err) {
  if (err) {
    return console.error("error connecting database");
  }
  console.log("connected to mysql server");
});

app.listen(3005, () => {
  console.log("server running");
});

app.get("/", (req, res) => {
  res.json({ message: "Welcome to scoreTracker" });
});

app.post("/register", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const email = req.body.email1;
  const gender = req.body.gender1;
  const dateOfBirth = req.body.dateOfBirth1;

  db.query(
    "INSERT INTO users (username, password, email, gender, DOB) VALUES (?,?,?,?,?)",
    [username, password, email, gender, dateOfBirth],
    (err, result) => console.log(err)
  );
});

app.post("/allDrawings", (req, res) => {
  const savedDrawing = req.body.savedDrawing;
  console.log("SERVER DATA", savedDrawing);

  db.query(
    "INSERT INTO drawings (drawing) VALUES (?)",
    [savedDrawing],
    (err, result) => console.log(err)
  );
});

app.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  db.query(
    "SELECT * FROM users WHERE username = ? AND password = ?",
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

app.get("/allUsers", (req, res) => {
  db.query("SELECT * FROM users", (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});
