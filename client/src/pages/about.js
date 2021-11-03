import React from "react";
import NavBar from "../components/navBar";

function About() {
  return (
    <div>
      <NavBar></NavBar>
      <div className="draw">
        <h1> Why did I choose to create this application?</h1>
        <ul>
          <li>
            I majored in Psychology because I have a strong desire to help out
            people. I decided to combine my passion for coding and my empathetic
            personality and create an application that can be used to better
            many people. Users can create their own profile and draw on a canvas
            to communicate experiences or emotions. Then their drawing will be
            saved to a database under their user profile. An admin can log in
            and view all the drawings saved by a specific user and track their
            progress based on the date the drawing is created. Traditionally,
            art therapy is done in person. However having an application allows
            users to have total privacy and comfort.It can also be done anywhere
            as long as there is internet access.
          </li>
        </ul>

        <div className="coding">
          <h2> How is this application built? </h2>
          <ul>
            <li>Javascript with React Framework: using React hooks</li>
            <li>
              MYSQL database with relationship database table. One table with
              all users including their registration information and user ID.
              Another table for each users' saved drawings
            </li>
            <li>Node.Js with express Framework for backend. REST API.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
