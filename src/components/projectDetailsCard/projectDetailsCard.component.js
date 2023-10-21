import React from "react";
import {
    DetailsContainer, ProjectDetailDescriptionBody,
    ProjectDetailDescriptionContainer,
    ProjectDetailDescriptionTitle,
    ProjectDetailGif
} from "./projectDetailsCard.styles";
import {
    ProjectDescriptionBody,
    ProjectDescriptionContainer,
    ProjectDescriptionTitle
} from "../projectCard/projectCard.styles";

export const ProjectDetailsCardComponent = ({ project }) => {
    return(
        <DetailsContainer>
            <ProjectDetailGif src={process.env.PUBLIC_URL + project.media} />
            <ProjectDetailDescriptionContainer>
                <ProjectDetailDescriptionTitle>{project.title}</ProjectDetailDescriptionTitle>
                <ProjectDetailDescriptionBody>{project.body}</ProjectDetailDescriptionBody>
            </ProjectDetailDescriptionContainer>
        </DetailsContainer>
    )
}