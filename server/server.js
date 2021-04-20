const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
//cross platform sending info from front end to backend
app.use(cors());
app.use(express.json());

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
