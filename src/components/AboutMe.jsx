import React from "react";
import htmlIcon from "../images/html5.svg";
import cssIcon from "../images/css3.svg";
import sassIcon from "../images/sass.svg";
import jsIcon from "../images/js.svg";
import tsIcon from "../images/typescript.svg";
import reactIcon from "../images/react.svg";
import nuxtIcon from "../images/nuxt.svg";
import vuetifyIcon from "../images/vuetify.svg";
import nodeIcon from "../images/nodejs.svg";
import npmIcon from "../images/npm.svg";
import pnpmIcon from "../images/pnpm.svg";
import vitestIcon from "../images/vitest.svg";
import playwrightIcon from "../images/playwright.svg";
import gitIcon from "../images/git.svg";
import githubIcon from "../images/github.svg";

import { useTranslation } from "react-i18next";

const technologies = [
  { src: htmlIcon, name: "HTML5" },
  { src: cssIcon, name: "CSS3" },
  { src: sassIcon, name: "Sass" },
  { src: jsIcon, name: "JavaScript" },
  { src: tsIcon, name: "TypeScript" },
  { src: reactIcon, name: "React" },
  { src: nuxtIcon, name: "Nuxt" },
  { src: vuetifyIcon, name: "Vuetify" },
  { src: nodeIcon, name: "Node.js" },
  { src: npmIcon, name: "npm" },
  { src: pnpmIcon, name: "pnpm" },
  { src: vitestIcon, name: "Vitest" },
  { src: playwrightIcon, name: "Playwright" },
  { src: gitIcon, name: "Git" },
  { src: githubIcon, name: "GitHub" },
];

const AboutMe = () => {
  const [t] = useTranslation("about");

  return (
    <section id="aboutMe" className="aboutMe">
      <article>
        <h2 className="about_mainTitle">{t("about.title")}</h2>
        <p className="about_text">{t("about.description")}</p>
      </article>

      <article className="tech_container">
        <h3 className="tech_title">{t("about.techTitle")}</h3>
        <ul className="tech_list">
          {technologies.map((tech) => (
            <li className="tech_item" key={tech.name} title={tech.name}>
              <img
                className="tech_icon"
                src={tech.src}
                alt={`${tech.name} logo`}
                loading="lazy"
              />
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
};

export default AboutMe;
