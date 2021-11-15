import React from "react";
import ProjectItem from "./ProjectItem";
import { useTranslation } from "react-i18next";

function ProjectList(props) {
  const [t] = useTranslation("projectsData");
  return (
    <ul className="projects_listContainer">
      {props.data.map((project) => (
        <li className="projects_listItem" key={project.id} id={project.id}>
          <ProjectItem
            id={project.id}
            title={project.title}
            img={project.img}
            description={project.description}
            website={project.website}
            githubUrl={project.githubUrl}
          />
        </li>
      ))}
    </ul>
  );
}

export default ProjectList;
