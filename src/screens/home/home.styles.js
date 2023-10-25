import profile_pic from "../../assets/profile_picture.jpeg";
import styled from "styled-components";

export const Background = styled.div`
  min-height: 100vh;
  min-width: 100%;
  padding-bottom: 5%;
  background-image: url("data:image/svg+xml,%3Csvg id='patternId' width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='a' patternUnits='userSpaceOnUse' width='70' height='8' patternTransform='scale(2) rotate(30)'%3E%3Crect x='0' y='0' width='100%25' height='100%25' fill='none'/%3E%3Cpath d='M-.02 22c8.373 0 11.938-4.695 16.32-9.662C20.785 7.258 25.728 2 35 2c9.272 0 14.215 5.258 18.7 10.338C58.082 17.305 61.647 22 70.02 22M-.02 14.002C8.353 14 11.918 9.306 16.3 4.339 20.785-.742 25.728-6 35-6 44.272-6 49.215-.742 53.7 4.339c4.382 4.967 7.947 9.661 16.32 9.664M70 6.004c-8.373-.001-11.918-4.698-16.3-9.665C49.215-8.742 44.272-14 35-14c-9.272 0-14.215 5.258-18.7 10.339C11.918 1.306 8.353 6-.02 6.002' stroke-width='2' stroke='hsla(259, 0%25, 95%25, 1)' fill='none'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='800%25' height='800%25' transform='translate(-280,-32)' fill='url(%23a)'/%3E%3C/svg%3E");
`;


export const Header = styled.header`
  height: 8vw;
  width: 100%;
  margin: 0 auto;
  padding: 2vw 15%;
  display: flex;
  box-sizing: border-box;
  align-items: end; 
  justify-content: center;
  background-color: ${(props) => props.theme.colors.lGray};
`;

export const HeaderWave = styled.div`
  background-image: url("data:image/svg+xml,%3Csvg id='wave' style='transform:rotate(180deg); filter: drop-shadow(0 0 1vw %23${(props) => props.theme.colors.dGray.slice(1)});fill: %23${(props) => props.theme.colors.lGray.slice(1)};' viewBox='0 0 1440 99' version='1.1' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0,30L48,33.3C96,37,192,43,288,41.7C384,40,480,30,576,28.3C672,27,768,33,864,40C960,47,1056,53,1152,53.3C1248,53,1344,47,1440,51.7C1536,57,1632,73,1728,71.7C1824,70,1920,50,2016,36.7C2112,23,2208,17,2304,26.7C2400,37,2496,63,2592,65C2688,67,2784,43,2880,30C2976,17,3072,13,3168,20C3264,27,3360,43,3456,43.3C3552,43,3648,27,3744,30C3840,33,3936,57,4032,68.3C4128,80,4224,80,4320,76.7C4416,73,4512,67,4608,66.7C4704,67,4800,73,4896,73.3C4992,73,5088,67,5184,61.7C5280,57,5376,53,5472,43.3C5568,33,5664,17,5760,8.3C5856,0,5952,0,6048,6.7C6144,13,6240,27,6336,33.3C6432,40,6528,40,6624,41.7C6720,43,6816,47,6864,48.3L6912,50L6912,100L6864,100C6816,100,6720,100,6624,100C6528,100,6432,100,6336,100C6240,100,6144,100,6048,100C5952,100,5856,100,5760,100C5664,100,5568,100,5472,100C5376,100,5280,100,5184,100C5088,100,4992,100,4896,100C4800,100,4704,100,4608,100C4512,100,4416,100,4320,100C4224,100,4128,100,4032,100C3936,100,3840,100,3744,100C3648,100,3552,100,3456,100C3360,100,3264,100,3168,100C3072,100,2976,100,2880,100C2784,100,2688,100,2592,100C2496,100,2400,100,2304,100C2208,100,2112,100,2016,100C1920,100,1824,100,1728,100C1632,100,1536,100,1440,100C1344,100,1248,100,1152,100C1056,100,960,100,864,100C768,100,672,100,576,100C480,100,384,100,288,100C192,100,96,100,48,100L0,100Z'%3E%3C/path%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-size: cover;
  margin-bottom: 0.7vw;
  width: 100%;
  height: 10vw;
`;

export const Logo = styled.img.attrs({
  src: profile_pic,
  loading: 'lazy',
})`
  height: 8vw;
  border-radius: 50vh;
  box-shadow: ${(props) => props.theme.colors.dGray} 0 0 2vw;
`;

export const AppTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-left: 3.5vw;
`;

export const AppTitle = styled.h1`
  margin: 0 0 1vw 0;
  color: ${(props) => props.theme.colors.lBlack};
  font-size: 4vw;
  font-weight: 500;
`;

export const AppDescription = styled.p`
  color: ${(props) => props.theme.colors.lBlack};
  margin: 0;
  font-size: 1vw;
  font-weight: 500;
`;

export const AppLink = styled.a`
  text-decoration: none;
  display: flex;
  align-items: center;
  height: 0;
`;
