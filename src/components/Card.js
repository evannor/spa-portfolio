import React from "react";
import "./Card.css";

function Card(props) {
  return (
    <article className="card">
      <img src={props.src} alt={props.alt} />
      <div>
        <div className={props.categoryClass}>{props.category}</div>
        <h3>{props.title}</h3>
        <p>{props.desc}</p>
      </div>
    </article>
  );
}

export default Card;
