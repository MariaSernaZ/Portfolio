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
        I´m a Junior Frontend Developer, who discovered a new passion, a new way
        of combining my creative and analytical skills: programming. Passionate
        about photography , travel and sports.
        <br></br>
        Graduada en Administración y Dirección de Empresas, descubrió la
        programación por casualidad, atrapándole la creatividad y el mundo de
        posibilidades que plantea. A través de la programación descubrí una
        nueva pasión con la que combinar mis capacidades creativas y analíticas.
        <br></br>
        Mi experiencia trabajando en distintos tipos de empresa me ha convertido
        en una persona con capacidad de adaptación y facilidad de aprendizaje.
        <br></br>
        Experiencia teletrabajando. Trabajo en equipo con filosofía Agile y
        marco de trabajo Scrum.
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
