import styled from "styled-components";

export const ProjectGif = styled.img`
  height: 300px;
  aspect-ratio: 16/9;
  border-radius: 30px;
  box-sizing: border-box;
  transition-property: border;
  transition-duration: 0.5s;
  transition-timing-function: ease-in-out;
  border: 5px transparent solid;
`;

export const ProjectCardContainer = styled.div`
  display: flex;
  margin: 20px 0;
  padding: 20px;
  transition-property: background-color;
  transition-duration: 0.5s;
  transition-timing-function: ease-in-out;
  border-radius: 50px;
  &:hover {
    background-color: rgba(255, 255, 255, 0.04);
  }
  &:hover ${ProjectGif} {
    border: 5px ${({ theme }) => theme.colors.pink} solid;
  }
`;

export const ProjectDescriptionContainer = styled.div`
  margin: 0 40px;
`;

export const ProjectDescriptionTitle = styled.p`
  font-weight: 500;
  font-size: 24px;
  color: ${(props) => props.theme.colors.white};
`;

export const ProjectDescriptionBody = styled.p`
  font-size: 18px;
  font-weight: 100;
  color: ${(props) => props.theme.colors.white};
`;
