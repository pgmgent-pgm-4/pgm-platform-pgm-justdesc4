import React from "react";
import "./css/SpotArticle.css";

export default function SpotArticle({ title, description, imgSrc }) {
  return (
    <article className="spotArticle">
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <figure>
        <img src={imgSrc} alt="course" />
      </figure>
    </article>
  );
}
