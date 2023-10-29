import styled from "styled-components";

export const DetailsContainer = styled.div`
  width: 45vw;
  height: fit-content;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 3vw;
  box-sizing: border-box;
  padding: 2vw;
  @media (max-width: 600px) {
    width: 96vw;
    padding: 4vw;
    border-radius: 6vw;
  }
`;

export const ProjectDetailMedia = styled.video`
  width: 100%;
  border-radius: 2vw;
  @media (max-width: 600px) {
    border-radius: 4vw;
  }
`;

export const ProjectDetailDescriptionContainer = styled.div`
  
`;

export const ProjectDetailDescriptionTitle = styled.p`
  font-weight: bold;
  font-size: 1.4vw;
  margin: 0.7vw;
  @media (max-width: 600px) {
    font-size: 6vw;
    margin: 2vw;
  }
`;

export const ProjectDetailDescriptionBody = styled.p`
  font-weight: normal;
  font-size: 0.9vw;
  margin: 0.7vw;
  @media (max-width: 600px) {
    font-size: 4.3vw;
    margin: 2vw;
  }
`;

export const GHButton = styled.a`
  background-color: ${(props) => props.theme.colors.pink};
  color: ${(props) => props.theme.colors.white};
  font-weight: bold;
  font-size: 1vw;
  width: 11vw;
  height: 2.3vw;
  border-radius: 50vh;
  align-items: center;
  display: flex;
  justify-content: center;
  text-decoration: none;
  margin: 2vw auto 0;
  transition: 0.3s;
  
  &:hover {
    transform: translate(-0.3vw, -0.3vw);
  }
  
  &:after {
    content: '';
    position: absolute;
    z-index: -1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    box-shadow: ${(props) => props.theme.colors.lBlue} 0.3vw 0.3vw;
    opacity: 0;
    transition: opacity 0.3s;
    border-radius: 50vh;
  }
  
  &:hover:after {
    opacity: 1;
  }

  @media (max-width: 600px) {
    width: 50vw;
    height: 12vw;
    font-size: 4.5vw;
    margin: 5vw auto 2vw;
  }
  
`;