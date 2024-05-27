import React from "react";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { GET_ALL_PROJECTS } from "../graphql/queries";
import ImageSlider from "../components/ImageSlider";

export default function Project() {
  const { slug } = useParams();
  const { loading, error, data } = useQuery(GET_ALL_PROJECTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error ...</p>;

  const project = data.projects.find((project) => project.slug === slug);

  if (!project) return <p>Project not found</p>;

  return (
    <div>
      <div>
        <h1>{project.title}</h1>
        <h2>{project.course.title}</h2>
      </div>
      <ImageSlider images={project.images} />
      <p>{project.description}</p>
    </div>
  );
}
