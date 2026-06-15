import React from "react";
import ProjectList from "./ProjectList";
import projectsData_en from "../service/en/projectsData.json";
import projectsData_es from "../service/es/projectsData.json";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t, i18n } = useTranslation("nav");
  const projectsData = i18n.language === "es" ? projectsData_es : projectsData_en;
  return (
    <section id="projects" className="projects">
      <h2 className="projects_mainTitle">{t("nav.projects")}</h2>
      <ProjectList data={projectsData} />
    </section>
  );
};

export default Projects;
