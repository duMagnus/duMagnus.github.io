import styled from "styled-components";

export const ProjectCardContainer = styled.div`
  display: flex;
  margin: 40px 0;
`;

export const ProjectGif = styled.img`
  height: 300px;
  aspect-ratio: 16/9;
  border-radius: 30px;
  box-sizing: border-box;
  transition-property: border;
  transition-duration: 0.5s;
  border: 5px transparent solid;
  &:hover {
    border: 5px ${({ theme }) => theme.colors.pink} solid;
  }
`;

export const ProjectDescriptionContainer = styled.div`
  margin: 0 40px;
`;

export const ProjectDescriptionTitle = styled.p`
  font-weight: 500;
  font-size: 24px;
`;

export const ProjectDescriptionBody = styled.p`
  font-size: 18px;
  font-weight: 100;
`;
