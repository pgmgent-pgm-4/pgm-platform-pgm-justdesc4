import React, { useState, useEffect } from "react";
import Filter from "../components/Filter";
import PostPreview from "../components/PostPreview";
import { GET_ALL_COURSES } from "../graphql/queries";
import { useQuery } from "@apollo/client";

export default function Portfolio() {
  const { loading, error, data } = useQuery(GET_ALL_COURSES);
  const [projects, setProjects] = useState([]);
  // Set initial projects for on page load
  const [initialProjectsSet, setInitialProjectsSet] = useState(false);

  const courses = data?.courses || [];
  const coursesWithProjects = courses.filter(
    (course) => course.projects.length > 0
  );

  // Set initial projects for on page load
  const allProjects = coursesWithProjects
    .map((course) => course.projects)
    .flat();
  useEffect(() => {
    if (!initialProjectsSet && coursesWithProjects.length > 0) {
      setProjects(allProjects);
      setInitialProjectsSet(true);
    }
  }, [coursesWithProjects, allProjects, initialProjectsSet]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error ...</p>;

  const handleCourseClick = (course) => {
    setProjects(course.projects);
  };

  return (
    <div>
      <h1>Ontdek ons werk.</h1>
      <figure>
        <img src="/assets/images/projects-banner.png" alt="Projects banner" />
      </figure>
      <section className="projects">
        <div className="container">
          <Filter items={coursesWithProjects} onItemClick={handleCourseClick} />
          <PostPreview posts={projects} path={"/projects"} />
        </div>
      </section>
    </div>
  );
}
