import React from "react";
import "./css/SpotProject.css";

export default function SpotProject({ title, image, slug }) {
  return (
    <div className="spot-project">
      <a href={`/projects/${slug}`}>
        <figure>
          <img src={image.url} alt={title} />
        </figure>
        <div>
          <h2>{title}</h2>
        </div>
      </a>
    </div>
  );
}
