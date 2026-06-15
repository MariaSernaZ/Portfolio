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
              aria-label="Cambiar idioma a español"
              aria-pressed={i18n.language === "es"}
              onClick={() => i18n.changeLanguage("es")}>
              ES
            </button>
            <button
              className="button"
              aria-label="Switch language to English"
              aria-pressed={i18n.language === "en"}
              onClick={() => i18n.changeLanguage("en")}>
              EN
            </button>
          </div>
        </li>
        <li className="navItem">
          <a className="nav_link" href="#aboutMe">
            {t("nav.about")}
          </a>
        </li>
        <li className="navItem">
          <a className="nav_link" href="#projects">
            {t("nav.projects")}
          </a>
        </li>
        <li className="navItem">
          <a className="nav_link" href="#contact">
            {t("nav.contact")}
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
