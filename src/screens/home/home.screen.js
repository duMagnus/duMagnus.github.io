import React from "react";
import {AppDescription, AppLink, AppTextContainer, AppTitle, Header, Logo} from "./home.styles";
import { Projects } from "../../components/projects/projects.component";
// import { useTheme } from "styled-components";
import Sketch from "../../background/sketch";

export const Home = () => {
  // const theme = useTheme();
  return (
      <>
        <Sketch style={{ position: 'fixed', zIndex: 0 }} />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <React.StrictMode>
              <Header>
                  <AppLink>
                  <Logo />
                      <AppTextContainer>
                          <AppTitle>Eduardo Magnus</AppTitle>
                          <AppDescription>Below you can see some of my personal projects. Most of them were created with the intend of learning some new technique, tool or language that I found interesting at the time.</AppDescription>
                      </AppTextContainer>
                  </AppLink>
              </Header>
              <Projects />
          </React.StrictMode>
        </div>
      </>
  );
};
