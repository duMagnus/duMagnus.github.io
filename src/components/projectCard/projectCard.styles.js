import styled from "styled-components";

export const ProjectMedia = styled.img`
  max-width: 100%;
  aspect-ratio: 16/9;
  border-radius: 2vw;
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
  aspect-ratio: 3/4;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 50px;
  transition: transform 0.35s ease-in-out;
  box-shadow: ${(props) => props.theme.colors.lGray} 0 0 30px;
  
  &:hover {
    cursor: pointer;
    transform: translate(-10px, -10px);
  }

  &:after {
    content: '';
    position: absolute;
    z-index: -1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    box-shadow: ${(props) => props.theme.colors.dGray} 10px 10px 30px;
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

  @media (max-width: 768px) {
    border-radius: 30px;
  }
`;

export const ProjectDescriptionContainer = styled.div`
  margin: 0 10px;

  @media (max-width: 768px) {
    margin: 0;
  }
`;

export const ProjectDescriptionTitle = styled.p`
  font-weight: 600;
  font-size: 1.4vw;
  color: ${(props) => props.theme.colors.lBlack};
  @media (max-width: 768px) {
    font-size: 7vw;
    margin: 1vw;
  }
`;

export const ProjectDescriptionBody = styled.p`
  font-size: 0.9vw;
  font-weight: 400;
  color: ${(props) => props.theme.colors.lBlack};
  @media (max-width: 768px) {
    font-size: 3.5vw;
    margin: 2vw 1vw;
  }
`;
