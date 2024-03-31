import React from "react";
import "./Card.css";

function Card(props) {
  return (
    <div className="card">
      <div className="card-image">
        <img src={props.image}></img>
      </div>
      <div className="card-info">
        <h3> {props.info}</h3>
        <ul>
          <li>{props.first}</li>
          <li>{props.second}</li>
          <li>{props.third}</li>
        </ul>
      </div>
    </div>
  );
}

export default Card;
