import styled from "styled-components";

export const ProjectGif = styled.img`
  max-width: 100%;
  aspect-ratio: 16/9;
  border-radius: 30px;
  box-sizing: border-box;
  transition-property: border;
  transition-duration: 0.5s;
  transition-timing-function: ease-in-out;
  border: 5px solid ${(props) => props.borderColor};
`;

export const ProjectCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 40px 0 40px;
  padding: 20px;
  width: 20%;
  min-height: 550px;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 50px;
  transition: transform 0.35s ease-in-out;
  box-shadow: ${(props) => props.theme.colors.lGray} 0 0 30px;
  
  &:hover {
    cursor: pointer;
    transform: translate(-15px, -15px);
  }

  &:after {
    content: '';
    position: absolute;
    z-index: -1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    box-shadow: ${(props) => props.theme.colors.dGray} 15px 15px 50px;
    opacity: 0;
    transition: opacity 0.35s ease-in-out;
    border-radius: 50px;
  }
  
  &:hover:after {
    opacity: 1;
  }
  
  @media (max-width: 1200px) {
    width: 100%;
  }
`;

export const ProjectDescriptionContainer = styled.div`
  margin: 0 10px;
`;

export const ProjectDescriptionTitle = styled.p`
  font-weight: 500;
  font-size: 22pt;
  color: ${(props) => props.theme.colors.lBlack};
`;

export const ProjectDescriptionBody = styled.p`
  font-size: 12pt;
  font-weight: 100;
  color: ${(props) => props.theme.colors.lBlack};
`;