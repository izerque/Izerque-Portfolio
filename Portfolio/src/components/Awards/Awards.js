import React from "react";
import AwardCard from "./Award-card";

function Awards() {
  const awards = [
    {
      id: 1,
      awardName: "Certificate in Fullstack Web development",
      program: "Tunga  Technical Impact Academy",
      thumbnail: "path/to/thumbnail1.jpg",
    },
    {
      id: 2,
      awardName: "",
      program: "Google Africa Developer Scholarship",
      thumbnail: "path/to/thumbnail2.jpg",
    },
    {
      id: 3,
      awardName: "Innovation Award",
      program: "Innovation Initiative",
      thumbnail: "path/to/thumbnail3.jpg",
    },
  ];

  return (
    <div className="awards-list">
      {awards.map((award) => (
        <div key={award.id} style={{ width: "30%", padding: "10px" }}>
          <AwardCard
            awardName={award.awardName}
            program={award.program}
            thumbnail={award.thumbnail}
          />
        </div>
      ))}
    </div>
  );
}

export default Awards;



