import profile_pic from "../../assets/profile_picture.jpeg";
import styled from "styled-components";
import bg from "../../assets/bg_image_account.png"

export const Background = styled.div`
  min-height: 100vh;
  min-width: 100%;
  padding-bottom: 100px;
  background-image: url(${bg});
`;


export const Header = styled.header`
  height: 230px;
  width: 100%;
  margin: 0 auto;
  padding: 40px;
  display: flex;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.lGray};
  box-shadow: ${(props) => props.theme.colors.dGray} 0px 0px 20px;
`;

export const Logo = styled.img.attrs({
  src: profile_pic,
  loading: 'lazy',
})`
  height: 130px;
  border-radius: 50vh;
  box-shadow: ${(props) => props.theme.colors.dGray} 0 0 30px;
`;

export const AppTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 0;
  margin-left: 40px;
`;

export const AppTitle = styled.h1`
  margin: 0 0 10px 0;
  color: ${(props) => props.theme.colors.lBlack};
  font-size: 50pt;
  font-weight: 500;
`;

export const AppDescription = styled.p`
  color: ${(props) => props.theme.colors.lBlack};
  margin: 0;
  font-size: 12pt;
`;

export const AppLink = styled.a`
  text-decoration: none;
  display: flex;
  align-items: center;
  height: 0;
`;
