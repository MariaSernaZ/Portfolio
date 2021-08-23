import React from "react";

function ProjectItem(props) {
  return (
    <article className="projects_listItem">
      <h3 className="item_title">{props.title}</h3>
      <div>
        <img className="item_img" src={props.img} alt="project photo" />
      </div>
      <div className="item_links">
        <a href={props.url} alt={props.title} target="_blank" className="link">
          <i class="fas fa-tv projectIcon"></i>
        </a>
        <a
          href={props.urlGithub}
          alt={props.title}
          target="_blank"
          className="link">
          <i class="fas fa-code projectIcon"></i>
        </a>
      </div>
      <div className="item_textContainer">
        <p className="item_description">{props.description}</p>
        <ul className="item_tags">
          {props.tags.map((tag, index) => (
            <li className="item_tag" key={index}>
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default ProjectItem;
