import React from "react";
import { GET_ALL_FOR_HOME } from "../graphql/queries";
import { useQuery } from "@apollo/client";
import HeroHome from "../components/HeroHome";
import SpotProject from "../components/SpotProject";
import PostPreview from "../components/PostPreview";
import "./css/Home.css";

export default function Home() {
  const { loading, error, data } = useQuery(GET_ALL_FOR_HOME);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error ...</p>;

  const education = data.educations[0];
  const firstThreeProjects = data.projects.slice(0, 3);
  const firstThreeBlogposts = data.blogposts.slice(0, 3);
  const firstThreeServices = data.services.slice(0, 3);

  console.log(data);

  return (
    <div className="container">
      <HeroHome
        title={education.title}
        description={education.description}
        link="/education"
        image={education.images[2]}
      />

      <section className="spotlight-projects">
        <h1>Bekijk onze projecten!</h1>
        <div className="projects">
          {firstThreeProjects.map((project, index) => (
            <SpotProject
              key={index}
              title={project.title}
              image={project.images[0]}
              slug={project.slug}
            />
          ))}
        </div>
      </section>

      <section className="spotlight-blog">
        <h2 className="spotlight-title">Blog.</h2>
        <PostPreview posts={firstThreeBlogposts} path="/blog" />
      </section>

      <section className="spotlight-services">
        <h2 className="spotlight-title">Services.</h2>
        <PostPreview posts={firstThreeServices} path="/services" />
      </section>
    </div>
  );
}
