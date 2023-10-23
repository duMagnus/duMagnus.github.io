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
import {useTheme} from "styled-components";

export const ProjectCard = ({ projectIndex, project }) => {
    const [isOpen, setIsOpen] = useState(false);
    const theme = useTheme();

    let borderColor = theme.colors.dBlue;
    let normalizedProjIndex = projectIndex % 5;

    if (normalizedProjIndex === 1) {
        borderColor = theme.colors.lBlue;
    } else if (normalizedProjIndex === 2) {
        borderColor = theme.colors.dGreen;
    } else if (normalizedProjIndex === 3) {
        borderColor = theme.colors.lGreen;
    } else if (normalizedProjIndex === 4) {
        borderColor = theme.colors.pink;
    }

    return (
        <>
            <ProjectCardContainer onClick={() => setIsOpen(!isOpen)}>
                <ProjectGif src={process.env.PUBLIC_URL + project.media} borderColor={borderColor}/>
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
