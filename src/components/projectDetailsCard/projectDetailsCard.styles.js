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
  font-size: 28pt;
  margin: 10px;
`;

export const ProjectDetailDescriptionBody = styled.p`
  font-weight: normal;
  font-size: 14pt;
  margin: 10px;
`;

export const GHButton = styled.a`
  background-color: ${(props) => props.theme.colors.pink};
  color: ${(props) => props.theme.colors.white};
  font-weight: bold;
  min-width: 180px;
  height: 50px;
  max-width: 40%;
  border-radius: 25px;
  text-align: center;
  align-items: center;
  display: flex;
  justify-content: center;
  text-decoration: none;
  margin: 40px auto 20px;
  
  transition: 0.3s;
  &:hover {
    transform: translate(-5px, -5px);
  }
  
  &:after {
    content: '';
    position: absolute;
    z-index: -1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    box-shadow: ${(props) => props.theme.colors.lBlue} 5px 5px;
    opacity: 0;
    transition: opacity 0.35s ease-in-out;
    border-radius: 25px;
  }
  
  &:hover:after {
    opacity: 1;
  }
  
`;