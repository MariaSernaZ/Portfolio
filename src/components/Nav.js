import React from "react";

const Nav = () => {
  return (
    <nav className="nav">
      <ul className="navList">
        <li className="navItem">
          <a classname="nav_link" href="#aboutMe">
            About me
          </a>
        </li>
        <li className="navItem">
          <a classname="nav_link" href="#projects">
            Projects
          </a>
        </li>
        <li className="navItem">
          <a classname="nav_link" href="#contact">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
