import React from "react";
import "./css/InfoDay.css";

export default function InfoDay({ image, link, date }) {
  return (
    <section className="info-day container">
      <figure>
        <img src={image} alt="Info Day" />
      </figure>
      <div>
        <h2>Infodag {date}</h2>
        <p>
          Vragen stellen aan docenten en studenten? Een rondleiding volgen of
          een cursus inkijken? Kom naar de infodag op {date} en ontdek of de
          opleiding écht bij jou past.
        </p>
        <a className="btn-link" target="_blank" href={link}>
          Meer info
        </a>
      </div>
    </section>
  );
}
