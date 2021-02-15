import React from "react";
import "./Card.css";

function Card(props) {
  return (
    <article className="card">
      <a href={props.address} target="_blank">
        <img src={props.src} alt={props.alt} className="card-img" />
        <div className="hover-txt">
          <div className="hover-txt-wrap">
            <p className="hover-txt-cat">{props.category}</p>
            <h2 className="hover-txt-title">{props.title}</h2>
          </div>
        </div>
        <div>
          <div className={props.categoryClass}>{props.category}</div>
          <h3>{props.title}</h3>
          <p>{props.desc}</p>
        </div>
      </a>
    </article>
  );
}

export default Card;
