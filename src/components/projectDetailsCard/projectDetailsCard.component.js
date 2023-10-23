import React from "react";
import {
    DetailsContainer, GHButton, ProjectDetailDescriptionBody,
    ProjectDetailDescriptionContainer,
    ProjectDetailDescriptionTitle,
    ProjectDetailGif
} from "./projectDetailsCard.styles";

export const ProjectDetailsCardComponent = ({ project }) => {
    return(
        <DetailsContainer>
            <ProjectDetailGif src={process.env.PUBLIC_URL + project.media} />
            <ProjectDetailDescriptionContainer>
                <ProjectDetailDescriptionTitle>{project.title}</ProjectDetailDescriptionTitle>
                <ProjectDetailDescriptionBody>{project.body}</ProjectDetailDescriptionBody>
            </ProjectDetailDescriptionContainer>
            <GHButton href={project.link} target='_blank'>
              {project.buttonText}
            </GHButton>
        </DetailsContainer>
    )
}