import React from "react";
import {
    DetailsContainer, GHButton, ProjectDetailDescriptionBody,
    ProjectDetailDescriptionContainer,
    ProjectDetailDescriptionTitle,
    ProjectDetailMedia
} from "./projectDetailsCard.styles";

export const ProjectDetailsCardComponent = ({ project }) => {
    return(
        <DetailsContainer>
            <ProjectDetailMedia src={process.env.PUBLIC_URL + project.video}
                                type="video/mp4"
                                controls={false}
                                autoPlay={true}
                                muted/>
            <ProjectDetailDescriptionContainer>
                <ProjectDetailDescriptionTitle>{project.title}</ProjectDetailDescriptionTitle>
                <ProjectDetailDescriptionBody>{project.longText}</ProjectDetailDescriptionBody>
            </ProjectDetailDescriptionContainer>
            <GHButton href={project.link} target='_blank'>
              {project.buttonText}
            </GHButton>
        </DetailsContainer>
    )
}
