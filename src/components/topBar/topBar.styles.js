import styled from "styled-components";


export const BarContainer = styled.div`
  max-width: max-content;
  padding: 0.5vw 2vw;
  box-shadow: ${(props) => props.theme.colors.dGray}90 0 0 30px;
  border-radius: 50vh;
  margin: 0 auto;
  align-items: center;
  display: flex;
  justify-content: space-between;
  background-color: white;
  @media (max-width: 600px) {
    display: block;
    border-radius: 7vw;
    width: 88vw;
    box-sizing: border-box;
    max-width: unset;
    padding: 3vw;
  }
`;

export const LinkContainer = styled.a`
  align-items: center;
  display: flex;
  justify-content: space-around;
  text-decoration: none;
  background-color: white;
  border-radius: 50vh;
  padding: 0.02vw 1.3vw;
  transition: all 0.35s ease-in-out;
  margin: 0 0.8vw;
  
  &:active {
    border: none;
    text-decoration: none;
  }
  
  &:first-of-type {
    margin-left: 0;
  }
  
  &:last-of-type {
    margin-right: 0;
  }
  
  &:hover {
    transform: translate(-5px, -5px);
  }

  &:after {
    content: '';
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    opacity: 0;
    top: 0;
    left: 0;
    border-radius: 50vh;
    box-shadow: 0 0 15px ${(props) => props.theme.colors.lGray};
    transition: opacity 0.35s ease-in-out;
  }
  
  &:hover:after {
    
    opacity: 1;
  }

  @media (max-width: 600px) {
    justify-content: left;
    padding: 0.2vw 7vw;
    margin: 2vw 0 1vw;
  }
`;

export const DisplayText = styled.p`
  color: ${(props) => props.theme.colors.lBlack};
  margin-left: 20px;
  font-weight: 600;
  font-size: 1vw;

  @media (max-width: 600px) {
    font-size: 3.5vw;
  }
`;

export const IconContainer = styled.div`
  margin-right: -3px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2vw;
  color: ${(props) => props.theme.colors.dBlue};
  @media (max-width: 600px) {
    margin-right: -13px;
    font-size: 6vw;
  }
`;
