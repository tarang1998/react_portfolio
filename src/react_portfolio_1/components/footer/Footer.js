import { Typography } from "@material-ui/core";
import React from "react";
import { Favorite } from "@material-ui/icons";

import "./Footer.css";
import { mediaLinks, personalData } from "../../utils/portfolioData";

import { useContext } from 'react'
import { ThemeContext } from 'styled-components'

const Footer = (props) => {

  const currentTheme = useContext(ThemeContext)

  return (
    <div className="footer container_shadow" style={{
      'background-color': currentTheme.body_color,
      'border-color': currentTheme.contrast_color

    }}>
      <div className="footer_left">
        <Typography className="footer_name" style={{
          'color': currentTheme.contrast_color
        }}>
          <a href={mediaLinks.socials["Linkedin"].link} target="_blank" style={{
          'color': currentTheme.contrast_color
        }}>
            Lets Connect!
          </a>
        </Typography>
      </div>

      <div className="footer_right">
        <Typography className="footer_copyright" style={{
          'color': currentTheme.contrast_color
        }}>
          Developed with <Favorite></Favorite> by{" "}
          <a href={mediaLinks.socials["Github"].link} target="_blank" style={{
          'color': currentTheme.contrast_color
        }}>
            {personalData.name}
          </a>
        </Typography>
      </div>
    </div>
  );
};

export default Footer;
