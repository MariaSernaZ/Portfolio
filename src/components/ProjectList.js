import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList(props) {
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
