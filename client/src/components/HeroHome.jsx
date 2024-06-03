import React from "react";
import "./css/HeroHome.css";

export default function HeroHome({ title, description, image, link }) {
  return (
    <section className="hero-home">
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
        <a className="btn-link" href={link}>
          Lees meer
        </a>
      </div>
      <figure>
        <img src={image.url} alt={title} />
      </figure>
    </section>
  );
}
