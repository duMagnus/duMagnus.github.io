import logo from "../../assets/logo.svg";
import styled from "styled-components";

export const Background = styled.div`
  min-height: 100vh;
  min-width: 100vh;
`;
export const Header = styled.header`
  height: 200px;
  padding: 40px;
  display: flex;
  box-sizing: border-box;
  align-items: center;
`;

export const Logo = styled.img.attrs({
  src: logo,
})`
  height: 120px;
`;

export const AppTitle = styled.p`
  color: ${(props) => props.theme.colors.white};
  font-size: 64px;
  margin-left: 40px;
  font-weight: 500;
`;

export const AppLink = styled.a`
  text-decoration: none;
  display: flex;
  align-items: center;
  height: 0%;
  background-color: red;
`;
