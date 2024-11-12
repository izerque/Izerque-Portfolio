import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer flex">
      <Row className="flex">
        <Col md="4" className="footer-copywright w-3/12">
          <h3>MIMO.Made.it</h3>
        </Col>
        <Col md="4" className="footer-copywright w-3/12">
          <h3>Copyright©{year}</h3>
        </Col>
        <Col md="4" className="footer-body w-3/12">
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
            <li className="social-icons">
              <a
                href="https://x.com/izerque"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiOutlineTwitter />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/isaac-mbangire-0101161a8/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
