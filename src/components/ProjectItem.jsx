import React from "react";

function ProjectItem(props) {
  return (
    <article className="projects_listItem">
      <h3 className="item_title">{props.title}</h3>
      <div className="img_container">
        <a
          href={props.website}
          aria-label={`Open ${props.title} live site`}
          target="_blank"
          rel="noopener noreferrer"
          className="link">
          <img
            className="item_img"
            src={props.img}
            alt={`${props.title} screenshot`}
            loading="lazy"
          />
        </a>
      </div>
      <div className="item_links"></div>
      <div className="item_textContainer">
        <p className="item_description">{props.description}</p>
        {props.githubUrl && (
          <a
            href={props.githubUrl}
            aria-label={`View ${props.title} source code on GitHub`}
            target="_blank"
            rel="noopener noreferrer"
            className="link">
            <i className="fab fa-github fa-lg projectIcon"></i>
          </a>
        )}
      </div>
    </article>
  );
}

export default ProjectItem;
