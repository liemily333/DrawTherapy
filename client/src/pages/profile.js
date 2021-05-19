import React from "react";
import NavBar from "../components/navBar/navBar";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Axios from "axios";

function userProfile() {
  const getGames = () => {
    Axios.get("http://localhost:3002/game", {
      name1: name1,
    }).then((response) => {
      console.log(response);
    });
  };

  return (
    <div>
      <NavBar></NavBar>
      <div></div>
      <Container>
        <Row>
          <Col>name1</Col>
          <Col>name2</Col>
          <Col>score1</Col>
          <Col>score2</Col>
          <Col>
            <button>delete</button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default userProfile;
