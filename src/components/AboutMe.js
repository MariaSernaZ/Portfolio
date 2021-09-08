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
import zeplinIcon from "../images/zeplin.png";
import codeIcon from "../images/code.svg";
import scrumIcon from "../images/scrum.png";

const AboutMe = () => {
  return (
    <section id="aboutMe" className="aboutMe">
      <div className="about_container">
        <h2 className="about_mainTitle">About Me</h2>

        <div className="about_language">
          <p className="about_text">
            <strong>&#60;En&#62;</strong>
            <div className="line1"></div> I discovered programming by chance,
            catching me the creativity and the possibility of{" "}
            <strong>making an impact on society.</strong>
            <div className="line2"></div>
            My experience working in different types of companies has made me a
            person with <strong>adaptability</strong> and{" "}
            <strong>ease of learning.</strong>
            <div className="line2"></div>
            Passionate about <strong>photography</strong>,{" "}
            <strong>travel</strong> and <strong>sports.</strong>
            <div className="line2"></div>I consider myself a{" "}
            <strong>hard-working</strong> and <strong>curious</strong> person,
            <strong> enjoying learning every day.</strong>
          </p>
          <p className="about_text about_textEs">
            <strong>&#60;Es&#62;</strong> <div className="line1"></div>A través
            de la programación descubrí una nueva pasión con la que combinar mis
            capacidades creativas y analíticas.
            <div className="line2"></div>Mi experiencia trabajando en distintos
            tipos de empresa me ha convertido en una persona con{" "}
            <strong>capacidad de adaptación</strong> y{" "}
            <strong>facilidad de aprendizaje.</strong>
            <div className="line2"></div>
            Apasionada de la <strong>fotografía</strong>, el <strong></strong> y
            los <strong>viajes.</strong>
            <div className="line2"></div>Destacar el{" "}
            <strong>trabajo en equipo</strong> como filosofía y la realización
            de proyectos formativos bajo la metodología de Agile y Scrum.
          </p>
        </div>
      </div>
      <div className="tech_container">
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
          <li className="about_item">
            <img className="about_icon" src={scrumIcon} alt="Scrum Icon" />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default AboutMe;
