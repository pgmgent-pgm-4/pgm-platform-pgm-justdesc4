import React, { useContext } from "react";
import { ROUTES } from "../routes/routes";
import { NavLink, useLocation } from "react-router-dom";
import { MenuContext } from "../context/MenuContext";
import "./css/Menu.css";

export default function Menu() {
  const { isOpen, toggleMenu } = useContext(MenuContext);
  const location = useLocation();

  return (
    <div className={`menu ${isOpen ? "" : "menu__hidden"}`}>
      <div className="menu__top">
        <div className="logo">
          <h1>PGM Portfolio</h1>
        </div>
        <figure className="menu__close" onClick={toggleMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 55 32">
            <path
              fill="currentColor"
              d="M0 0h54.825v3.404H0V0zm11.072 14.298h32.681v3.404H11.072v-3.404zM0 28.596h54.825V32H0v-3.404z"
            />
          </svg>
        </figure>
      </div>
      <nav className="menu__items">
        <ul>
          <li>
            <NavLink
              to={ROUTES.home.path}
              onClick={toggleMenu}
              className={
                location.pathname === ROUTES.home.path ? "active-link" : ""
              }
            >
              {ROUTES.home.title}
            </NavLink>
          </li>
          <li>
            <NavLink
              to={ROUTES.education.path}
              onClick={toggleMenu}
              className={
                location.pathname === ROUTES.education.path ? "active-link" : ""
              }
            >
              {ROUTES.education.title}
            </NavLink>
          </li>
          <li>
            <NavLink
              to={ROUTES.blog.path}
              onClick={toggleMenu}
              className={
                location.pathname === ROUTES.blog.path ? "active-link" : ""
              }
            >
              {ROUTES.blog.title}
            </NavLink>
          </li>
          <li>
            <NavLink
              to={ROUTES.curriculum.path}
              onClick={toggleMenu}
              className={
                location.pathname === ROUTES.curriculum.path
                  ? "active-link"
                  : ""
              }
            >
              {ROUTES.curriculum.title}
            </NavLink>
          </li>
          <li>
            <NavLink
              to={ROUTES.portfolio.path}
              onClick={toggleMenu}
              className={
                location.pathname === ROUTES.portfolio.path ? "active-link" : ""
              }
            >
              {ROUTES.portfolio.title}
            </NavLink>
          </li>
          <li>
            <NavLink
              to={ROUTES.services.path}
              onClick={toggleMenu}
              className={
                location.pathname === ROUTES.services.path ? "active-link" : ""
              }
            >
              {ROUTES.services.title}
            </NavLink>
          </li>
          <li>
            <NavLink
              to={ROUTES.team.path}
              onClick={toggleMenu}
              className={
                location.pathname === ROUTES.team.path ? "active-link" : ""
              }
            >
              {ROUTES.team.title}
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
