import React from "react";
import {Link} from 'react-router-dom';
import classes from "./PlayListCard.module.css";

const PlayListCard = props => {
  const classesArr = [classes.PlayListCard];
  if (props.currentVideo === props.cardPos) {
    classesArr.push(classes.Active);
  }

  return (
    
    <Link to={`/watch/${props.id}`}>
      <div
        className={classesArr.join(" ")}
        onClick={() => props.onVideoCardClick(props.cardPos)}
      >
        <img src={props.thumbnail} alt={props.title} />
        <h3>{props.title}</h3>
      </div>
    </Link>
  );
};

export default PlayListCard;
