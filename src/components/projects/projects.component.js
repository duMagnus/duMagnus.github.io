import React, { useState } from "react";
import { ProjectCard } from "../projectCard/projectCard.component";
import { ProjectsContainer } from "./projects.styles";
import projectsJson from "../../assets/projects/projects.json";

export const Projects = () => {
  const { projects } = projectsJson;
  return (
    <ProjectsContainer>
      {projects.map((project, index) => {
        return <ProjectCard project={project} projectIndex={index} />;
      })}
    </ProjectsContainer>
  );
};
