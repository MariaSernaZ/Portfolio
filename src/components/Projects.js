import React from "react";
import ProjectList from "./ProjectList";
import projectsData from "../service/en/projectsData.json";
import projectsData_es from "../service/es/projectsData.json";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const [t] = useTranslation("projectsData");
  return (
    <section id="projects" className="projects">
      <h2 className="projects_mainTitle">Projects</h2>
      <ProjectList data={projectsData} data={projectsData_es} />
    </section>
  );
};

export default Projects;
