import React from "react";
import {BarContainer, DisplayText, LinkContainer} from "./topBar.styles";
import { FiGithub as GitHub, FiMail as Email, FiLinkedin as LinkedIn } from "react-icons/fi";
import {IconContext} from "react-icons";
import {useTheme} from "styled-components";

export  const TopBar = () => {

  const theme = useTheme();

  const links = [
    { title: 'github', icon: GitHub, displayText: 'GitHub', link: 'https://github.com/duMagnus/'},
    { title: 'email', icon: Email, displayText: 'eduj.magnus@gmail.com', link: 'mailto:eduj.magnus@gmail.com' },
    { title: 'linkedIn', icon: LinkedIn, displayText: 'duMagnus', link: 'https://www.linkedin.com/in/eduardo-magnus/' },
  ];

  return(
    <IconContext.Provider value={{ color: theme.colors.lBlack, size: '35' }}>
      <BarContainer>
        {links.map(({ icon: Icon, displayText, link}) => {
          return(
            <LinkContainer href={link} target='_blank'>
              <Icon/>
              <DisplayText>
                {displayText}
              </DisplayText>
            </LinkContainer>
          )
        })}
      </BarContainer>
    </IconContext.Provider>
  )
}