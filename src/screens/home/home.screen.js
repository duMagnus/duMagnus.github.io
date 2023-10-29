import React from "react";
import {AppDescription, AppLink, AppTextContainer, AppTitle, Background, Header, HeaderWave, Logo} from "./home.styles";
import { Projects } from "../../components/projects/projects.component";
import {TopBar} from "../../components/topBar/topBar.component";

export const Home = () => {
  return (
    <Background>
      <Header>
        <AppLink>
          <Logo />
          <AppTextContainer>
            <AppTitle>Eduardo Magnus</AppTitle>
            <AppDescription>Hi, I’m a full-stack developer skilled in Java, Python, React, and Vue.js. I create apps with high-quality code and user experience. I’m also interested in AI development and learning new technologies. You can see my projects below (more info clicking on the cards). If you have any questions or want to work with me, please email me or connect with me on LinkedIn.</AppDescription>
          </AppTextContainer>
        </AppLink>
      </Header>
      <HeaderWave/>
      <TopBar/>
      <Projects />
    </Background>
  );
};
