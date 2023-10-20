import React from "react";
import {
  ProjectCardContainer,
  ProjectDescriptionBody,
  ProjectDescriptionContainer,
  ProjectDescriptionTitle,
  ProjectGif,
} from "./projectCard.styles";

export const ProjectCard = ({ projectIndex, project }) => {
  return (
    <ProjectCardContainer>
      <a href={project.link} target="_blank">
        <ProjectGif src={process.env.PUBLIC_URL + project.media} />
      </a>
      <ProjectDescriptionContainer inverse={projectIndex % 2 === 0}>
        <ProjectDescriptionTitle>{project.title}</ProjectDescriptionTitle>
        <ProjectDescriptionBody>{project.body}</ProjectDescriptionBody>
      </ProjectDescriptionContainer>
    </ProjectCardContainer>
  );
};
