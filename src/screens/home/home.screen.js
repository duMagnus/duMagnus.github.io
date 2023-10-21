import React from "react";
import {AppDescription, AppLink, AppTextContainer, AppTitle, Background, Header, Logo} from "./home.styles";
import { Projects } from "../../components/projects/projects.component";
import { useTheme } from "styled-components";

export const Home = () => {
  const theme = useTheme();
  return (
    <Background
      style={{
        background: `linear-gradient(155deg, ${theme.colors.dBlue}, ${theme.colors.lBlue})`,
      }}
    >
      <Header
        style={{
          background: 'transparent',
        }}
      >
        <AppLink>
          <Logo />
          <AppTextContainer>
            <AppTitle>Eduardo Magnus</AppTitle>
            <AppDescription>Below you can see some of my personal projects. Most of them were created with the intend of learning some new technique, tool or language that I found interesting at the time.</AppDescription>
          </AppTextContainer>
        </AppLink>
      </Header>
      <Projects />
    </Background>
  );
};
