import React from "react";
import ProjectList from "./ProjectList";
import projectsData from "../service/projectsData.json";

const Projects = () => {
  return (
    <section className="projects">
      <h2 className="projects_mainTitle">Projects</h2>
      <ProjectList data={projectsData} />
    </section>
  );
};

export default Projects;
