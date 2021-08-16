import React from "react";
import htmlIcon from "../images/html5.svg";
import cssIcon from "../images/css3.svg";
import sassIcon from "../images/sass.svg";
import jsIcon from "../images/js.svg";
import reactIcon from "../images/react.svg";
import gitIcon from "../images/git.svg";
import githubIcon from "../images/github.svg";
import gulpIcon from "../images/gulp.svg";
import npmIcon from "../images/npm.svg";
import codeIcon from "../images/code.svg";
import scrumIcon from "../images/scrum.png";
import zeplinIcon from "../images/zeplin.png";

const AboutMe = () => {
  return (
    <section>
      <h2 className="about_mainTitle">About Me</h2>
      <p className="about_text">
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here', making it
        look like readable English. Many desktop publishing packages and web
        page editors now use Lorem Ipsum as their default model text, and a
        search for 'lorem ipsum' will uncover many web sites still in their
        infancy. Various versions have evolved over the years, sometimes by
        accident, sometimes on purpose.
      </p>

      <h3 className="tech_title">Technical Skills</h3>
      <ul className="about_list">
        <li className="about_item">
          <img className="about_icon" src={htmlIcon} alt="HTML5 Icon" />
          HTML5
        </li>
        <li className="about_item">
          <img className="about_icon" src={cssIcon} alt="CSS3 Icon" />
          CSS3
        </li>
        <li className="about_item">
          <img className="about_icon" src={jsIcon} alt="JavaScript Icon" />
          JavaScript
        </li>
        <li className="about_item">
          <img className="about_icon" src={reactIcon} alt="React Icon" />
          React
        </li>
        <li className="about_item">
          <img className="about_icon" src={gitIcon} alt="Git Icon" />
          Git
        </li>
        <li className="about_item">
          <img className="about_icon" src={gulpIcon} alt="Gulp Icon" />
          Gulp
        </li>
        <li className="about_item">
          <img className="about_icon" src={sassIcon} alt="Sass Icon" />
          Sass
        </li>
        <li className="about_item">
          <img className="about_icon" src={npmIcon} alt="Npm Icon" />
          Npm
        </li>
        <li className="about_item">
          <img className="about_icon" src={githubIcon} alt="Github Icon" />
          Github
        </li>
        <li className="about_item">
          <img className="about_icon" src={scrumIcon} alt="Scrum Icon" />
          Scrum-Agile
        </li>
        <li className="about_item">
          <img className="about_icon" src={codeIcon} alt="VS Code Icon" />
          VS Code
        </li>
        <li className="about_item">
          <img className="about_icon" src={zeplinIcon} alt="Zeplin Icon" />
          Zeplin
        </li>
      </ul>
    </section>
  );
};

export default AboutMe;
