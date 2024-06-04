import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_ALL_BLOGPOSTS, GET_ALL_COURSES } from "../graphql/queries";
import PostPreview from "../components/PostPreview";
import "./css/Search.css";

export default function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const { data: blogData } = useQuery(GET_ALL_BLOGPOSTS);
  const { data: projectData } = useQuery(GET_ALL_COURSES);

  const blogposts = blogData?.blogposts || [];
  const courses = projectData?.courses || [];

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredBlogPosts = blogposts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredProjects = courses
    .map((course) => course.projects)
    .flat()
    .filter((project) =>
      project.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <div className="search container">
      <h1>Doorzoek het platform.</h1>
      <div className="search__form">
        <input type="text" placeholder="Search" onChange={handleSearch} />
        <button>
          <svg
            fill="#000000"
            height="800px"
            width="800px"
            version="1.1"
            id="Capa_1"
            viewBox="0 0 183.792 183.792"
          >
            <path
              fill="currentColor"
              d="M54.734,9.053C39.12,18.067,27.95,32.624,23.284,50.039c-4.667,17.415-2.271,35.606,6.743,51.22
	c12.023,20.823,34.441,33.759,58.508,33.759c7.599,0,15.139-1.308,22.287-3.818l30.364,52.592l21.65-12.5l-30.359-52.583
	c10.255-8.774,17.638-20.411,21.207-33.73c4.666-17.415,2.27-35.605-6.744-51.22C134.918,12.936,112.499,0,88.433,0
	C76.645,0,64.992,3.13,54.734,9.053z M125.29,46.259c5.676,9.831,7.184,21.285,4.246,32.25c-2.938,10.965-9.971,20.13-19.802,25.806
	c-6.462,3.731-13.793,5.703-21.199,5.703c-15.163,0-29.286-8.146-36.857-21.259c-5.676-9.831-7.184-21.284-4.245-32.25
	c2.938-10.965,9.971-20.13,19.802-25.807C73.696,26.972,81.027,25,88.433,25C103.597,25,117.719,33.146,125.29,46.259z"
            />
          </svg>
        </button>
      </div>
      {searchTerm && (
        <section className="search__results">
          <h1>Blog.</h1>
          <PostPreview posts={filteredBlogPosts} path={"/blog"} />
          <h1>Projects.</h1>
          <PostPreview posts={filteredProjects} path={"/projects"} />
        </section>
      )}
    </div>
  );
}
