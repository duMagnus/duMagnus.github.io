import styled from "styled-components";

export const ProjectGif = styled.img`
  max-width: 100%;
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
  width: 25%;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 50px;
  transition: transform, box-shadow, 0.35s;
  &:hover {
    cursor: pointer;
    transform: translate(-${(props) => props.theme.spacing.shadowDepth * 5}vw, -${(props) => props.theme.spacing.shadowDepth * 5}vw);
    box-shadow: ${(props) => props.theme.colors.dBlue} ${(props) => props.theme.spacing.shadowDepth}vw ${(props) => props.theme.spacing.shadowDepth}vw,
                ${(props) => props.theme.colors.lBlue} ${(props) => props.theme.spacing.shadowDepth * 2}vw ${(props) => props.theme.spacing.shadowDepth * 2}vw, 
                ${(props) => props.theme.colors.dGreen} ${(props) => props.theme.spacing.shadowDepth * 3}vw ${(props) => props.theme.spacing.shadowDepth * 3}vw, 
                ${(props) => props.theme.colors.lGreen} ${(props) => props.theme.spacing.shadowDepth * 4}vw ${(props) => props.theme.spacing.shadowDepth * 4}vw, 
                ${(props) => props.theme.colors.pink} ${(props) => props.theme.spacing.shadowDepth * 5}vw ${(props) => props.theme.spacing.shadowDepth * 5}vw;
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
