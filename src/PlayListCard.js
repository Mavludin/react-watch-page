import React from "react";
import classes from "./PlayListCard.module.css";

const PlayListCard = props => {
  const classesArr = [classes.PlayListCard];
  if (props.currentVideo === props.cardPos) {
    classesArr.push(classes.Active);
  }

  return (
    <div
      className={classesArr.join(" ")}
      onClick={() => props.onCardClick(props.cardPos)}
    >
      <img src={props.thumbnail} alt={props.title} />
      <h3>{props.title}</h3>
    </div>
  );
};

export default PlayListCard;
