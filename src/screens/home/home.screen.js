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
            <AppDescription>Below you can see some of my personal projects. Most of them were created with the intend of learning some new technique, tool or language that I found interesting at the time.</AppDescription>
          </AppTextContainer>
        </AppLink>
      </Header>
      <HeaderWave/>
      <TopBar/>
      <Projects />
    </Background>
  );
};
