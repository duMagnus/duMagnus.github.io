import React, {useState} from "react";
import {
    ProjectCardContainer,
    ProjectDescriptionBody,
    ProjectDescriptionContainer,
    ProjectDescriptionTitle,
    ProjectGif,
} from "./projectCard.styles";
import {ProjectDetailsCardComponent} from "../projectDetailsCard/projectDetailsCard.component";
import {createPortal} from "react-dom";
import {Modal} from "../modal/modal.component";

export const ProjectCard = ({ projectIndex, project }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <ProjectCardContainer onClick={() => setIsOpen(!isOpen)}>
                <ProjectGif src={process.env.PUBLIC_URL + project.media} />
                <ProjectDescriptionContainer>
                    <ProjectDescriptionTitle>{project.title}</ProjectDescriptionTitle>
                    <ProjectDescriptionBody>{project.body}</ProjectDescriptionBody>
                </ProjectDescriptionContainer>
            </ProjectCardContainer>
            {isOpen && createPortal(
                <Modal closeModal={() => setIsOpen(!isOpen)}>
                    <ProjectDetailsCardComponent project={project}/>
                </Modal>,
                document.body
            )}
        </>
    );
};
