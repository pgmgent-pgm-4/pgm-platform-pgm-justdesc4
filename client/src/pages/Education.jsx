import React from "react";
import { GET_EDUCATIONS } from "../graphql/queries";
import { useQuery } from "@apollo/client";
import InfoDay from "../components/InfoDay";
import "./css/Education.css";

export default function Education() {
  const { loading, error, data } = useQuery(GET_EDUCATIONS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error ...</p>;

  const education = data.educations[0];

  return (
    <div>
      <h1>Leer de opleiding kennen!</h1>
      <InfoDay
        image={education.images[0].url}
        link={education.educationUrl}
        date={education.informationDay}
      />

      <section className="extra-info container">
        {education.extraInfo.map((info, index) => (
          <article key={index}>
            <h3>{info.title}</h3>
            <p>{info.description}</p>
          </article>
        ))}
      </section>

      <figure className="fw-banner">
        <img src={education.images[1].url} alt="Banner" />
      </figure>

      <section className="expectations container">
        <h2>Iets voor jou?</h2>
        {education.expectation.map((expect, index) => (
          <ul>
            <li key={index}>{expect}</li>
          </ul>
        ))}
      </section>
    </div>
  );
}
