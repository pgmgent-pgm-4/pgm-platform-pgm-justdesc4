import React from "react";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { GET_ALL_BLOGPOSTS } from "../graphql/queries";

export default function BlogPost() {
  const { slug } = useParams();
  const { loading, error, data } = useQuery(GET_ALL_BLOGPOSTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error ...</p>;

  const blogpost = data.blogposts.find((blogpost) => blogpost.slug === slug);

  if (!blogpost) return <p>Blog not found.</p>;

  return (
    <div>
      <h1>{blogpost.title}</h1>
      <figure>
        <img src={blogpost.image.url} alt={blogpost.title} />
      </figure>
      <p>{blogpost.description}</p>
    </div>
  );
}
