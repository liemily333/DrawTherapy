import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { useHistory } from "react-router-dom";

function Navigation() {
  const history = useHistory();

  function profilePage() {
    history.push("/profile");
  }

  function homePage() {
    history.push("/counter");
  }
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link onClick={homePage}>home</Nav.Link>
            <Nav.Link onClick={profilePage}>profile</Nav.Link>
            <Nav.Link>Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
export default Navigation;
