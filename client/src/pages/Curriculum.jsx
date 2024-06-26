import React from "react";
import { GET_ALL_COURSES } from "../graphql/queries";
import { useQuery } from "@apollo/client";
import { Helmet } from "react-helmet";
import SpotArticle from "../components/SpotArticle";

export default function Curriculum() {
  const { loading, error, data } = useQuery(GET_ALL_COURSES);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error ...</p>;
  const courses = data.courses;

  return (
    <div className="container">
      <Helmet>
        <title>PGM Platform - Curriculum</title>
      </Helmet>
      {courses.map((course, index) => (
        <SpotArticle
          key={index}
          title={course.title}
          description={course.description}
          imgSrc={course.image.url}
        />
      ))}
    </div>
  );
}
