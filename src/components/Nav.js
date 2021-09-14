import React from "react";
import { useTranslation } from "react-i18next";

const Nav = () => {
  const [t, i18n] = useTranslation("nav");
  return (
    <nav className="nav">
      <ul className="navList">
        <li>
          <div>
            <button
              className="button button_es"
              onClick={() => i18n.changeLanguage("es")}>
              ES
            </button>
            <button
              className="button"
              onClick={() => i18n.changeLanguage("en")}>
              EN
            </button>
          </div>
        </li>
        <li className="navItem">
          <a classname="nav_link" href="#aboutMe">
            {t("nav.about")}
          </a>
        </li>
        <li className="navItem">
          <a classname="nav_link" href="#projects">
            {t("nav.projects")}
          </a>
        </li>
        <li className="navItem">
          <a classname="nav_link" href="#contact">
            {t("nav.contact")}
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
