import React, { useContext, useEffect } from "react";
import { ROUTES } from "../routes/routes";
import { NavLink } from "react-router-dom";
import { MenuContext } from "../context/MenuContext";
import "./css/Menu.css";

export default function Menu() {
  const { isOpen, toggleMenu } = useContext(MenuContext);

  useEffect(() => {
    if (isOpen) {
      console.log("Menu mounted");
    } else {
      console.log("Menu unmounted");
    }
  }, [isOpen]);

  return isOpen ? (
    <div className="menu">
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
        </ul>
      </nav>
    </div>
  ) : (
    <div className="menu__hidden"></div>
  );
}
