import React from "react";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { GET_ALL_PROJECTS } from "../graphql/queries";
import { Helmet } from "react-helmet";
import ImageSlider from "../components/ImageSlider";
import "./css/Project.css";

export default function Project() {
  const { slug } = useParams();
  const { loading, error, data } = useQuery(GET_ALL_PROJECTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error ...</p>;

  const project = data.projects.find((project) => project.slug === slug);

  if (!project) return <p>Project not found</p>;

  return (
    <div className="project container">
      <Helmet>
        <title>Project: {project.title}</title>
      </Helmet>
      <div className="back">
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
        >
          <title>chevron-left</title>
          <path
            fill="currentColor"
            d="M20.321 24.4c-0.384 0-0.768-0.146-1.060-0.439l-8.261-8.26 8.26-8.262c0.269-0.261 0.637-0.421 1.042-0.421 0.828 0 1.5 0.672 1.5 1.5 0 0.405-0.161 0.773-0.421 1.043l-6.14 6.14 6.14 6.14c0.269 0.271 0.436 0.645 0.436 1.058 0 0.827-0.669 1.498-1.496 1.502h-0"
          ></path>
        </svg>
        <a href="/portfolio">Portfolio</a>
      </div>
      <div className="project__title">
        <h1>{project.title}</h1>
        <h2>{project.course.title}</h2>
      </div>
      <ImageSlider images={project.images} />
      <p>{project.description}</p>
    </div>
  );
}
