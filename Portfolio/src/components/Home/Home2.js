import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Let Me  <span className="text-cyan-500 font-bold"> Introduce </span> myself
            </h1>
            <p className="home-about-body">
            I am a dynamic and results-oriented Front-end Web Developer
            <br />
             with knowledge & experience In
             <i><b className="purple"> React, Node.js, PostgreSQL, and Tailwind CSS,</b></i>
            <br />
            <br />
            I hold a bachelor’s degree in 
            <i><b className="purple"> Information technology</b></i> and recently completed an intensive <i><b className="purple"> TUNGA fullstack 
            Developer training</b></i> in June, where I further sharpened my skills in modern 
            Web development frameworks & Communication skills.
            <br />
            <br />
             My project experience includes building <i><b className="purple"> Responsive Web applications, 
             API integrations and database-driven platforms  </b></i>  that focus on  both functionality and user experience.
             <br />
             <br />
              I’m passionate about solving complex problems and constantly seeking opportunities to learn and apply new technologies. 
              <br />
              <br />
            </p>
          </Col>
          {/* <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col> */}
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1 className="social-title" >Get intouch </h1>
            {/* <p>
              Feel free to <span className="purple">connect </span>with me
            </p> */}
            <ul className="home-about-social-links" style={{ alignItems:'center', marginLeft:'auto', marginRight:'auto', border: "1px solid cyan" , padding:'6px' ,borderRadius:'100px'}}>
              <li className="social-icons flex justify-center items-center">
                <a
                  href="https://github.com/izerque"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://x.com/izerque"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/isaac-mbangire-0101161a8/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
