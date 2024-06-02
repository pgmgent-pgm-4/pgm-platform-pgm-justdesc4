import React from "react";
import { GET_ALL_FOR_HOME } from "../graphql/queries";
import { useQuery } from "@apollo/client";
import HeroHome from "../components/HeroHome";
import SpotProject from "../components/SpotProject";
import PostPreview from "../components/PostPreview";

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
    <>
      <HeroHome
        title={education.title}
        description={education.description}
        link="/education"
        image={education.images[2]}
      />

      <section>
        <h2>Bekijk onze projecten!</h2>
        <div>
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

      <section>
        <h2>Blog.</h2>
        <PostPreview posts={firstThreeBlogposts} path="/blog" />
      </section>

      <section>
        <h2>Services.</h2>
        <PostPreview posts={firstThreeServices} path="/services" />
      </section>
    </>
  );
}
