import React, { useState } from "react";
import NavBar from "../components/navBar/navBar";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Axios from "axios";
import axios from "axios";

function userProfile() {
  // const [name1, setName1] = useState(null);
  // const [name2, setName2] = useState(null);
  // const [score1, setScore1] = useState(null);
  // const [score2, setScore2] = useState(null);

  const data = [];
  console.log(data);

  Axios.get("http://localhost:3002/games").then((response) => {
    data.push(response);
    console.log(data[0].data.data);
  });

  return (
    <div>
      <NavBar></NavBar>
      <div></div>
      <Container>
        <Row>
          {/* <Col>{name1}</Col>
          <Col>{name2}</Col>
          <Col>{score1}</Col>
          <Col>score2</Col> */}
          <Col>
            <button>delete</button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default userProfile;
