import React from "react";
import "./Card.scss";

const Card = (props) => {
  const { workName, workIntro } = props;

  return (
    <div className="cardWrapper">
      <h1 className="cardText">{workName}</h1>
      <span className="cardSpan">{workIntro}</span>
    </div>
  );
};

export default Card;
