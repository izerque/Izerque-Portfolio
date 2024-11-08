import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import Education from "./Education"
import  aboutIllu  from "../../Assets/aboutIllu.png";
import LeftAlignedTimeline from "../LeftAlignedTimeline";
import Awards from "../Awards/Awards";

const educationLevels = [
  {
    schoolName: "Ndejje University",
    yearsAttended: "2016 - 2019",
    educationLevel: "Bachelor's Degree in CInformation Technology",
  },
  {
    schoolName: "Mengo Senior School",
    yearsAttended: "2014 - 2015",
    educationLevel: "Advanced Secondary Education",
  },
  {
    schoolName: "Mengo Senior School",
    yearsAttended: "2010- 2013",
    educationLevel: "Ordinary Level of Education",
  },
];


function About() {
  return (
    <Container fluid className="about-section border-1">
      {/* <Particle /> */}
      <Container>
        <div className="raw" style={{ justifyContent: "left", padding: "10px" }}>
          <div
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
              
            }}
          >
            <h1 className="items-start">My <span className="purple font-bold">Proffessional Journey</span></h1>
           <LeftAlignedTimeline />
            {/* <Aboutcard /> */}
          </div>

          {/* Awards section */}
          {/* <Awards /> */}

         
        </div>

        <div className="p-4">
        <h1 className="text-cyan-700">
          Education 
        </h1>
        <ul className="schools-container" >
          {educationLevels.map((educationLevel, index) => (
            <Education
              key={index}
              schoolName={educationLevel.schoolName}
              yearsAttended={educationLevel.yearsAttended}
              educationLevel={educationLevel.educationLevel}

            />
          ))}
        </ul>
        </div>

        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />

      </Container>
    </Container>
  );
}

export default About;
