import styled from "styled-components";


export const BarContainer = styled.div`
  max-width: max-content;
  padding: 10px 40px;
  box-shadow: ${(props) => props.theme.colors.lGray}80 0 0 40px;
  border-radius: 50vh;
  margin: 0 auto;
  align-items: center;
  display: flex;
  justify-content: space-between;
  background-color: white;
`;

export const LinkContainer = styled.a`
  align-items: center;
  display: flex;
  justify-content: space-around;
  text-decoration: none;
  background-color: white;
  border-radius: 50vh;
  padding: 3px 20px;
  transition: all 0.35s ease-in-out;
  margin: 0 10px;
  
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
    border-radius: 50vh;
    box-shadow: 0 0 15px ${(props) => props.theme.colors.lGray};
    transition: opacity 0.35s ease-in-out;
  }
  
  &:hover:after {
    opacity: 1;
  }
`;

export const DisplayText = styled.p`
  color: ${(props) => props.theme.colors.lBlack};
  margin-left: 20px;
  font-weight: 600;
`;
