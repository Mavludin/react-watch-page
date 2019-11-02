import React from "react";
import classes from "./PlayListCard.module.css";

const PlayListCard = props => {
  return (
    <div className={classes.PlayListCard}>
      <img src={props.thumbnail} alt={props.title} />
      <h3>{props.title}</h3>
    </div>
  );
};

export default PlayListCard;
