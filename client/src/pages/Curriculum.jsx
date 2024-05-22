import React from "react";
import { GET_ALL_COURSES } from "../graphql/queries";
import { useQuery } from "@apollo/client";
import SpotArticle from "../components/SpotArticle";

export default function Curriculum() {
  const { loading, error, data } = useQuery(GET_ALL_COURSES);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error ...</p>;
  const courses = data.courses;

  return (
    <div>
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
