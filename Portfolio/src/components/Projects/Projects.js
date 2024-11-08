import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import eatify from "../../Assets/Projects/eatify.png";
import leaf from "../../Assets/Projects/leaf.png";
import rentsafe from "../../Assets/Projects/rentsafe.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import musica from "../../Assets/Projects/musica.png";
import muvyhub from '../../Assets/Projects/muvyhub.png';
import shopy from "../../Assets/Projects/shopy.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      {/* <Particle /> */}
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rentsafe}
              isBlog={false}
              title="Rentsafe"
              description="A real estate management web platform focusing on property management and modern living advancement."
              ghLink=".."
              demoLink=" https://rentsafe-dev.web.app/home "
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={muvyhub}
              isBlog={false}
              title="Muvy Hub"
              description="A nodejs application tha allows a user to create a database of favrate movies with a list showing the first Ten movies in the database created"
              ghLink="https://github.com/izerque/eatify0.1"
              demoLink="https://eatifyy.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={eatify}
              isBlog={false}
              title="Eatfy"
              description="An online Food ordering App, this was an open source project that i used to practice componente rendering and Login and registration Logic"
              ghLink="https://github.com/izerque/eatify0.1"
              demoLink="https://eatifyy.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={musica}
              isBlog={false}
              title="Music App"
              description="Music player web application, this was an open source project and i was responsible for creating the music controller component."
              ghLink="https://github.com/izerque/music"
              demoLink="https://musicla.netlify.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shopy}
              isBlog={false}
              title="Shopping-list"
              description="Afull stack training practicing project where users can create a shopping list, includes user authentication"
              ghLink="https://github.com/Ssewagudde-dev/shopping-list"
              demoLink=".."              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
