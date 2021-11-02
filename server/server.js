const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mysql = require("mysql");
const cors = require("cors");
const passport = require("passport");
const port = process.env.PORT || 3005;
const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "Minkyoung!1017",
  database: "drawUsers",
});
//cross platform sending info from front end to backend
//middleware runs between the time the server gets the request and when the time server sends out a response
//it is ran before any other requests
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(passport.initialize());
app.use(passport.session());

//connecting to mysql database

db.connect(function (err) {
  if (err) {
    return console.error("error connecting database");
  }
  console.log("connected to mysql server");
});

app.listen(port, () => {
  console.log("server running on: ", port);
});

//create constructor

app.get("/", (req, res) => {
  res.json({ message: "Welcome to  drawTherapy" });
});

//new user register
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

// user login
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
//save drawings
app.post("/allDrawings", (req, res) => {
  const savedDrawing = req.body.savedDrawing;
  console.log("SERVER DATA", savedDrawing);

  db.query(
    "INSERT INTO drawings (drawing) VALUES (?)",
    [savedDrawing],
    (err, result) => console.log(err)
  );
});

//get drawings

app.get("/allDrawings", (req, res) => {
  db.query("SELECT * FROM drawings", (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/allUsers", (req, res) => {
  db.query("SELECT * FROM users where userID = ?", [userID], (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

// app.put("/allUsers/:id", (req, res) => {
//   //first look up the userID you want to update
//   // if user doesn't exist return a erorr message
//   //update user
//   //return the updated user
//   const userID = req.params.id;
//   const newUsername = "Jane";
//   const updatedEmail = "test@gmail.com";
//   db.query(
//     "UPDATE users SET username = ? , email = ? WHERE userID=?",
//     [newUsername, updatedEmail, userID],
//     (err, result) => {
//       if (err) {
//         res.send(err);
//       } else {
//         res.send(result);
//       }
//     }
//   );
// });

// app.delete("/allusers/:id", (req, res) => {
//   const userID = req.params.id;
//   db.query("DELETE FROM users WHERE userID=4", [userID], (err, result) => {
//     if (err) {
//       res.send(err);
//     } else {
//       res.send(result);
//     }
//   });
// });
