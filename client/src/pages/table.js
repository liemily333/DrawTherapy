import React, { useState, useEffect } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";

function UserTable() {
  const [userList, setUserList] = useState([]);
  const [username, setUserName] = useState([]);
  const [password, setPassword] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3002/allusers")
      .then((res) => res.json())
      .then((result) => {
        setUserList(result);
        setPassword(
          result.map((item) => {
            const newPassword = item.password;
            return newPassword;
          })
        );
        setUserName(
          result.map((item) => {
            const newUsername = item.username;
            return newUsername;
          })
        );
      });
  }, []);

  console.log("List of All users", userList);
  console.log("USERNAME", username);
  console.log("PASSWORD", password);

  return (
    <div>
      <Table>
        <thead> username</thead>
        <tbody>
          {username.map((result, index) => {
            return <tr key={index}>{result}</tr>;
          })}
          {password.map((result, index) => {
            return <tr key={index}>{result}</tr>;
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default UserTable;
