import React from "react";

const Education = ({ schoolName, yearsAttended, educationLevel }) => {
  return (
    <div className="school-card">
      <h3 className="text-lg school-name font-semibold">{schoolName}</h3>
      <p className="text-gray-600 school-level">{educationLevel}</p>
      <p className="school-year">{yearsAttended}</p>
    </div>
  );
};

export default Education;


