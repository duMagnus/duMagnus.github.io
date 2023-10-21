import styled from "styled-components";

export const ProjectGif = styled.img`
  width: 100%;
  aspect-ratio: 16/9;
  border-radius: 30px;
  box-sizing: border-box;
  transition-property: border;
  transition-duration: 0.5s;
  transition-timing-function: ease-in-out;
  border: 2px solid ${(props) => props.theme.colors.dGray};
`;

export const ProjectCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 40px 0 20px;
  padding: 20px;
  width: 28%;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 50px;
  transition: transform, box-shadow, 0.5s;
  &:hover {
    cursor: pointer;
    transform: translate(-5px, -5px);
    box-shadow: rgb(52, 52, 52, 0.4) 5px 5px, rgba(52, 52, 52, 0.3) 10px 10px, rgba(52, 52, 52, 0.2) 15px 15px, rgba(52, 52, 52, 0.1) 20px 20px, rgba(52, 52, 52, 0.05) 25px 25px;
  }
`;

export const ProjectDescriptionContainer = styled.div`
  margin: 0 40px;
`;

export const ProjectDescriptionTitle = styled.p`
  font-weight: 500;
  font-size: 24px;
  color: ${(props) => props.theme.colors.lBlack};
`;

export const ProjectDescriptionBody = styled.p`
  font-size: 18px;
  font-weight: 100;
  color: ${(props) => props.theme.colors.lBlack};
`;
