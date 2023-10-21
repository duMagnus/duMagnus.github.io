import logo from "../../assets/logo.svg";
import styled from "styled-components";

export const Background = styled.div`
  min-height: 100vh;
  min-width: 100%;
  padding-bottom: 100px;
`;
export const Header = styled.header`
  height: 230px;
  padding: 40px;
  display: flex;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.img.attrs({
  src: logo,
})`
  height: 120px;
`;

export const AppTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 0;
  width: 550px;
  margin-left: 40px;
`;

export const AppTitle = styled.h1`
  margin: 0 0 10px 0;
  color: ${(props) => props.theme.colors.white};
  font-size: 50pt;
  font-weight: 500;
`;

export const AppDescription = styled.p`
  color: ${(props) => props.theme.colors.white};
  margin: 0;
  font-size: 12pt;
`;

export const AppLink = styled.a`
  text-decoration: none;
  display: flex;
  align-items: center;
  height: 0;
`;
