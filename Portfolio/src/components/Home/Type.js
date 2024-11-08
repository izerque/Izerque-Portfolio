import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Developer",
          "Freelancer",
          "MERN Stack Developer",
          "Open Source Contributor",
          "Frontend Developer",
          "UI/UX Designer"
        ],
        autoStart: true,
        loop:true,
        deleteSpeed:10,
      }}
    />
  );
}

export default Type;
