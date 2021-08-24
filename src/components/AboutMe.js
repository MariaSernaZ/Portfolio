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
import zeplinIcon from "../images/zeplin.png";

const AboutMe = () => {
  return (
    <section id="aboutMe" className="aboutMe">
      <h2 className="about_mainTitle">About Me</h2>
      <p className="about_text">
        Graduated in Management and Business Administration, I discovered
        programming by chance, catching me the creativity and the world of
        possibilities it allows. A new passion to combine my creative and
        analytical skills.
        <br></br>
        My experience working in different types of companies has made me a
        person with adaptability and ease of learning.
        <br></br>
        Passionate about photography, travel and sports.
        <br></br>
        Teamwork with Agile philosophy and Scrum framework. Also, remote working
        experience.
      </p>

      <h3 className="tech_title">Technical Skills</h3>
      <ul className="about_list">
        <li className="about_item">
          <img className="about_icon" src={htmlIcon} alt="HTML5 Icon" />
        </li>
        <li className="about_item">
          <img className="about_icon" src={cssIcon} alt="CSS3 Icon" />
        </li>
        <li className="about_item">
          <img className="about_icon" src={sassIcon} alt="Sass Icon" />
        </li>
        <li className="about_item">
          <img className="about_icon" src={jsIcon} alt="JavaScript Icon" />
        </li>
        <li className="about_item">
          <img className="about_icon" src={reactIcon} alt="React Icon" />
        </li>
        <li className="about_item">
          <img className="about_icon" src={gulpIcon} alt="Gulp Icon" />
        </li>
        <li className="about_item">
          <img className="about_icon" src={npmIcon} alt="Npm Icon" />
        </li>
        <li className="about_item">
          <img className="about_icon" src={zeplinIcon} alt="Zeplin Icon" />
        </li>
        <li className="about_item">
          <img className="about_icon" src={gitIcon} alt="Git Icon" />
        </li>
        <li className="about_item">
          <img className="about_icon" src={githubIcon} alt="Github Icon" />
        </li>
        <li className="about_item">
          <img className="about_icon" src={codeIcon} alt="VS Code Icon" />
        </li>
      </ul>
    </section>
  );
};

export default AboutMe;
