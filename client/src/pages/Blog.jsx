import React from "react";
import { useQuery } from "@apollo/client";
import { GET_ALL_BLOGPOSTS } from "../graphql/queries";
import { Helmet } from "react-helmet";
import PostPreview from "../components/PostPreview";
import "./css/Blog.css";

export default function Blog() {
  const { loading, error, data } = useQuery(GET_ALL_BLOGPOSTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error ...</p>;

  const blogposts = data?.blogposts || [];

  return (
    <div className="blog-page container">
      <Helmet>
        <title>PGM Platform - Blog</title>
      </Helmet>
      <h1>Blog.</h1>
      <PostPreview posts={blogposts} path={"/blog"} />
    </div>
  );
}
