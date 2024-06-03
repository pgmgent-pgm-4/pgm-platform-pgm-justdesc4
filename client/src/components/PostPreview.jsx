import React from "react";
import "./css/PostPreview.css";

export default function PostPreview({ posts, path }) {
  return (
    <div className="posts">
      {posts.map((post, index) => (
        <article key={index} className="post">
          <a href={`${path}/${post.slug}`}>
            <figure>
              <img
                src={post.images ? post.images[0].url : post.image.url}
                alt={post.title}
              />
            </figure>
            <h2>{post.title}</h2>
            <p>{post.smallDescription}</p>
          </a>
        </article>
      ))}
    </div>
  );
}
