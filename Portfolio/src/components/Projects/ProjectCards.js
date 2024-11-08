import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa"
import { CiLink } from "react-icons/ci";


function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body className="project-details">
        <Card.Title className="project-title1">{props.title}</Card.Title>
        <Card.Text className="project-details-1" style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        
        {"\n"}
        {"\n"}

        <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/izerque"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons social-icons-links">
              <a
                href="https://x.com/izerque"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <CiLink />
              </a>
            </li>
          </ul>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
