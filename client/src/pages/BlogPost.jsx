import React from "react";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { GET_ALL_BLOGPOSTS } from "../graphql/queries";
import { Helmet } from "react-helmet";
import "./css/BlogPost.css";

export default function BlogPost() {
  const { slug } = useParams();
  const { loading, error, data } = useQuery(GET_ALL_BLOGPOSTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error ...</p>;

  const blogpost = data.blogposts.find((blogpost) => blogpost.slug === slug);

  if (!blogpost) return <p>Blog not found.</p>;

  return (
    <div className="blog-post container">
      <Helmet>
        <title>Blog: {blogpost.title}</title>
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
        <a href="/blog">Blog overzicht</a>
      </div>
      <h1>{blogpost.title}</h1>
      <figure>
        <img src={blogpost.image.url} alt={blogpost.title} />
      </figure>
      <p>{blogpost.description}</p>
    </div>
  );
}
