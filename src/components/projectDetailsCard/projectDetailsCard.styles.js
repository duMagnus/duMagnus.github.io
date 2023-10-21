import styled from "styled-components";
import { ProjectGif } from "../projectCard/projectCard.styles"

export const DetailsContainer = styled.div`
  width: 900px;
  height: fit-content;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 50px;
  box-sizing: border-box;
  padding: 40px;
`;

export const ProjectDetailGif = styled(ProjectGif)`
  && {
    border: 5px solid ${(props) => props.theme.colors.lBlue};
  }
`;

export const ProjectDetailDescriptionContainer = styled.div`
  
`;

export const ProjectDetailDescriptionTitle = styled.p`
  font-weight: bold;
  font-size: 32px;
`;

export const ProjectDetailDescriptionBody = styled.p`
  font-weight: normal;
  font-size: 20px;
`;
