import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="nav-bar">
      <h1>
        {" "}
        <a href="/">Aurora Powell</a>
      </h1>

      <nav>
        <ul className="portfolio-switch">
          <li>
            <NavLink activeClassName="active" to="art">
              Art
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="coding">
              Coding
            </NavLink>
          </li>
        </ul>
        <ul className="">
          <li>
            <NavLink activeClassName="active" to="bio">
              Bio
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="contact">
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="links">
              Links
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
