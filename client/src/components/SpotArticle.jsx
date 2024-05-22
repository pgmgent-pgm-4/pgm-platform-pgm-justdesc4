import React from "react";

export default function SpotArticle({ title, description, imgSrc }) {
  return (
    <div>
      <article>
        <div className="course">
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
        <div className="course-img">
          <img src={imgSrc} alt="course" />
        </div>
      </article>
    </div>
  );
}
