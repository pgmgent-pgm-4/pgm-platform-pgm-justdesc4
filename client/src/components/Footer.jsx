import React from "react";

export default function Footer({ link }) {
  return (
    <footer>
      <div>
        <ul>
          <li>
            <a target="_blank" href={link}>
              PGM Gent
            </a>
          </li>
        </ul>
        <ul>
          <li>
            <a target="_blank" href={link}>
              Arteveldehogeschool
            </a>
          </li>
          <li>
            <a target="_blank" href={link}>
              Graduaat Programmeren
            </a>
          </li>
        </ul>
      </div>
      <div>
        <p>©PGM Platform</p>
      </div>
    </footer>
  );
}
