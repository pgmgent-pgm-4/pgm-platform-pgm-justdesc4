import React from "react";
import { ROUTES } from "../routes/routes";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div className="logo">
        <h1>PGM Portfolio</h1>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to={ROUTES.home.path}>{ROUTES.home.title}</NavLink>
          </li>
          <li>
            <NavLink to={ROUTES.course.path}>{ROUTES.course.title}</NavLink>
          </li>
          <li>
            <NavLink to={ROUTES.blog.path}>{ROUTES.blog.title}</NavLink>
          </li>
          <li>
            <NavLink to={ROUTES.program.path}>{ROUTES.program.title}</NavLink>
          </li>
          <li>
            <NavLink to={ROUTES.portfolio.path}>
              {ROUTES.portfolio.title}
            </NavLink>
          </li>
          <li>
            <NavLink to={ROUTES.services.path}>{ROUTES.services.title}</NavLink>
          </li>
          <li>
            <NavLink to={ROUTES.team.path}>{ROUTES.team.title}</NavLink>
          </li>
          <li>
            <NavLink to={ROUTES.search.path}>{ROUTES.search.title}</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
