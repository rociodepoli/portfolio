import React from "react";
import styles from "./work.module.css";
import projects from "./projects";
import ProjectCard from "./ProjectCard/ProjectCard";

export default function Work() {
  return (
    <div className={styles.container}>
      <h1>My <strong style={{ color: "burlywood" }}>projects</strong></h1>
      <div className={styles.projects}>
        {projects?.map((project) => (
          <ProjectCard
            name={project.name}
            description={project.description}
            github={project.github}
            deploy={project.deploy}
            image={project.image}
          />
        ))}
      </div>
      {/* {console.log(projects)} */}
    </div>
  );
}
