import React from "react";
import "./css/TeamMember.css";

export default function TeamMember({ member }) {
  return (
    <div className="team-member">
      <figure>
        <img src={member.image.url} alt={member.name} />
      </figure>
      <h2>{member.name}</h2>
      {member.role.map((role, roleIndex) => (
        <p key={roleIndex}>{role}</p>
      ))}
    </div>
  );
}
