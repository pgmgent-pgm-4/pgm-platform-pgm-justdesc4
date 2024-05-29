import React from "react";

export default function TeamMember({ member }) {
  return (
    <div>
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
