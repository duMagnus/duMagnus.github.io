import profile_pic from "../../assets/profile_picture.jpeg";
import styled from "styled-components";

export const Background = styled.div`
  min-height: 100vh;
  min-width: 100%;
  padding-bottom: 100px;
  background-image: url("data:image/svg+xml,%3Csvg id='patternId' width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='a' patternUnits='userSpaceOnUse' width='70' height='8' patternTransform='scale(2) rotate(30)'%3E%3Crect x='0' y='0' width='100%25' height='100%25' fill='none'/%3E%3Cpath d='M-.02 22c8.373 0 11.938-4.695 16.32-9.662C20.785 7.258 25.728 2 35 2c9.272 0 14.215 5.258 18.7 10.338C58.082 17.305 61.647 22 70.02 22M-.02 14.002C8.353 14 11.918 9.306 16.3 4.339 20.785-.742 25.728-6 35-6 44.272-6 49.215-.742 53.7 4.339c4.382 4.967 7.947 9.661 16.32 9.664M70 6.004c-8.373-.001-11.918-4.698-16.3-9.665C49.215-8.742 44.272-14 35-14c-9.272 0-14.215 5.258-18.7 10.339C11.918 1.306 8.353 6-.02 6.002' stroke-width='2' stroke='hsla(259, 0%25, 95%25, 1)' fill='none'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='800%25' height='800%25' transform='translate(-280,-32)' fill='url(%23a)'/%3E%3C/svg%3E");
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
  // box-shadow: ${(props) => props.theme.colors.dGray} 0px 0px 20px;
`;

export const HeaderWave = styled.div`
  background-image: url("data:image/svg+xml,%3Csvg id='wave' style='transform:rotate(180deg); fill: %23${(props) => props.theme.colors.lGray.slice(1)};' viewBox='0 0 1440 99' version='1.1' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath style='transform:translate(0, 0px); opacity:1' d='M0,10L60,10C120,10,240,10,360,23.3C480,37,600,63,720,73.3C840,83,960,77,1080,65C1200,53,1320,37,1440,35C1560,33,1680,47,1800,55C1920,63,2040,67,2160,66.7C2280,67,2400,63,2520,58.3C2640,53,2760,47,2880,43.3C3000,40,3120,40,3240,36.7C3360,33,3480,27,3600,30C3720,33,3840,47,3960,43.3C4080,40,4200,20,4320,16.7C4440,13,4560,27,4680,31.7C4800,37,4920,33,5040,30C5160,27,5280,23,5400,23.3C5520,23,5640,27,5760,28.3C5880,30,6000,30,6120,40C6240,50,6360,70,6480,73.3C6600,77,6720,63,6840,58.3C6960,53,7080,57,7200,51.7C7320,47,7440,33,7560,35C7680,37,7800,53,7920,63.3C8040,73,8160,77,8280,68.3C8400,60,8520,40,8580,30L8640,20L8640,100L8580,100C8520,100,8400,100,8280,100C8160,100,8040,100,7920,100C7800,100,7680,100,7560,100C7440,100,7320,100,7200,100C7080,100,6960,100,6840,100C6720,100,6600,100,6480,100C6360,100,6240,100,6120,100C6000,100,5880,100,5760,100C5640,100,5520,100,5400,100C5280,100,5160,100,5040,100C4920,100,4800,100,4680,100C4560,100,4440,100,4320,100C4200,100,4080,100,3960,100C3840,100,3720,100,3600,100C3480,100,3360,100,3240,100C3120,100,3000,100,2880,100C2760,100,2640,100,2520,100C2400,100,2280,100,2160,100C2040,100,1920,100,1800,100C1680,100,1560,100,1440,100C1320,100,1200,100,1080,100C960,100,840,100,720,100C600,100,480,100,360,100C240,100,120,100,60,100L0,100Z'%3E%3C/path%3E%3C/svg%3E%0A");
  background-repeat: no-repeat;
  background-size: cover;
  margin-top: -20px;
  width: 100%;
  height: 120px;
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
