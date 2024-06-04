import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_ALL_TEAM_MEMBERS } from "../graphql/queries";
import { Helmet } from "react-helmet";
import Filter from "../components/Filter";
import TeamMember from "../components/TeamMember";
import "./css/Team.css";

export default function Team() {
  const { loading, error, data } = useQuery(GET_ALL_TEAM_MEMBERS);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [filteredMembers, setFilteredMembers] = useState([]);

  useEffect(() => {
    if (data) {
      const allCategories = data.teammembers.flatMap(
        (member) => member.category
      );
      const uniqueCategories = Array.from(new Set(allCategories));
      setCategories(uniqueCategories);
    }
  }, [data]);

  useEffect(() => {
    if (data) {
      setFilteredMembers(
        data.teammembers.filter((member) =>
          selectedCategory ? member.category.includes(selectedCategory) : true
        )
      );
    }
  }, [data, selectedCategory]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;

  return (
    <>
      <Helmet>
        <title>PGM Platform - Team</title>
      </Helmet>
      <h1>Ontdek ons team.</h1>
      <section>
        <div className="container">
          <Filter
            items={categories}
            onItemClick={(category) => setSelectedCategory(category)}
          />
          <div className="team">
            {filteredMembers.map((member, index) => (
              <TeamMember key={index} member={member} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
