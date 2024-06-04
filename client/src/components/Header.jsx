import React, { useContext } from "react";
import { ROUTES } from "../routes/routes";
import { NavLink } from "react-router-dom";
import { MenuContext } from "../context/MenuContext";
import "./css/Header.css";

export default function Header() {
  const { toggleMenu } = useContext(MenuContext);

  return (
    <header>
      <div className="container">
        <a href="/" className="logo">
          <h1>PGM Platform</h1>
        </a>
        <nav>
          <ul>
            <li>
              <NavLink to={ROUTES.search.path}>
                <svg
                  fill="currentColor"
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 183.792 183.792"
                >
                  <path
                    d="M54.734,9.053C39.12,18.067,27.95,32.624,23.284,50.039c-4.667,17.415-2.271,35.606,6.743,51.22
                      c12.023,20.823,34.441,33.759,58.508,33.759c7.599,0,15.139-1.308,22.287-3.818l30.364,52.592l21.65-12.5l-30.359-52.583
                      c10.255-8.774,17.638-20.411,21.207-33.73c4.666-17.415,2.27-35.605-6.744-51.22C134.918,12.936,112.499,0,88.433,0
                      C76.645,0,64.992,3.13,54.734,9.053z M125.29,46.259c5.676,9.831,7.184,21.285,4.246,32.25c-2.938,10.965-9.971,20.13-19.802,25.806
                      c-6.462,3.731-13.793,5.703-21.199,5.703c-15.163,0-29.286-8.146-36.857-21.259c-5.676-9.831-7.184-21.284-4.245-32.25
                      c2.938-10.965,9.971-20.13,19.802-25.807C73.696,26.972,81.027,25,88.433,25C103.597,25,117.719,33.146,125.29,46.259z"
                  />
                </svg>
              </NavLink>
            </li>
            <li className="open-menu">
              <svg
                onClick={() => {
                  toggleMenu();
                }}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 55 32"
              >
                <path
                  fill="currentColor"
                  d="M0 0h54.825v3.404H0V0zm11.072 14.298h32.681v3.404H11.072v-3.404zM0 28.596h54.825V32H0v-3.404z"
                />
              </svg>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
