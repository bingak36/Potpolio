import React from "react";
import styles from "./ProjectCard.module.scss";
import Tag from "../tag/Tag";
const ProjectCard = ({ title, description, tags = [], imageAlt = "" }) => {
  return (
    <article className={styles.card}>
      <div className={styles.thumb} role="img" aria-label={imageAlt || title} />

      <div className={styles.body}>
        <div className={styles.tags}>
          {tags.map(({ label, variant }) => (
            <Tag key={label} variant={variant}>
              {label}
            </Tag>
          ))}
        </div>
        <h3 className="card-tit">{title}</h3>
        <p className={styles.desc}>{description}</p>
        <div className={styles.cta}>
          <button className="btn btn__primary btn__md">Live demo</button>
          <button className="btn btn__outline btn__md">View code</button>
        </div>
      </div>
      {title}
    </article>
  );
};

export default ProjectCard;
