import React from "react";
import Card from "react-bootstrap/Card";

function AwardCard(props) {
  return (
    <Card className="award-card">
      <Card.Img className="border-red"  src={props.thumbnail} alt="award-thumbnail" />
      <Card.Body className="award-details">
        <Card.Title className="award-name">{props.awardName}</Card.Title>
        <Card.Text className="award-program">{props.program}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default AwardCard;
