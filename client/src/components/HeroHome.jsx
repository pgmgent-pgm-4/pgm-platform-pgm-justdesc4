import React from "react";

export default function HeroHome({ title, description, image, link }) {
  return (
    <section>
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
        <a href={link}>Lees meer</a>
      </div>
      <figure>
        <img src={image.url} alt={title} />
      </figure>
    </section>
  );
}
