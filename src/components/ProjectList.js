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
            tags={project.tags}
            url={project.url}
            urlGithub={project.urlGithub}
          />
        </li>
      ))}
    </ul>
  );
}

export default ProjectList;
