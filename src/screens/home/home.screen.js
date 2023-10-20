import React from "react";
import { AppLink, AppTitle, Background, Header, Logo } from "./home.styles";
import { Projects } from "../../components/projects/projects.component";
import { useTheme } from "styled-components";

export const Home = () => {
  const theme = useTheme();
  return (
    <Background
      style={{
        background: `linear-gradient(155deg, ${theme.colors.dBlack}, ${theme.colors.lBlack})`,
      }}
    >
      <Header
        style={{
          background: `linear-gradient(to right, ${theme.colors.dBlue}, ${theme.colors.lBlue})`,
        }}
      >
        <AppLink href="home">
          <Logo />
          <AppTitle>Eduardo Magnus</AppTitle>
        </AppLink>
      </Header>
      <Projects />
    </Background>
  );
};
