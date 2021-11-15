import React from "react";
import { useTranslation } from "react-i18next";

function ProjectItem(props) {
  const [t] = useTranslation("projectsData");
  return (
    <article className="projects_listItem">
      <h3 className="item_title">{t("props.title")}</h3>
      <div className="img_container">
        <a
          href={props.website}
          alt={props.title}
          target="_blank"
          className="link">
          <img className="item_img" src={props.img} alt="project image" />
        </a>
      </div>
      <div className="item_links"></div>
      <div className="item_textContainer">
        <p className="item_description">{props.description}</p>
        <a
          href={props.githubUrl}
          alt={props.title}
          target="_blank"
          className="link">
          <i class="fab fa-github fa-lg projectIcon"></i>
        </a>
      </div>
    </article>
  );
}

export default ProjectItem;
