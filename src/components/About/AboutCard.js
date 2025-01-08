import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Jimmy Musyoki </span>
            from <span className="purple"> Nairobi, Kenya.</span>
            <br />
            I am currently working as a IT support Officer at Missions of Hope International.
            <br />
            I have completed a course  in Software Enginering at Moringa
            School.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Tutoring
            </li>
            <li className="about-activity">
              <ImPointRight /> Adventuring
            </li>
            <li className="about-activity">
              <ImPointRight /> Photography
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Chase the unknown, embrace the growth."{" "}
          </p>
          <footer className="blockquote-footer">Jimmy Musyoki</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
