import { Typography } from "@material-ui/core";
import React from "react";
import { Favorite } from "@material-ui/icons";

import "./Footer.css";
import { mediaLinks, personalData } from "../../utils/portfolioData";

const Footer = (props) => {
  return (
    <div className="footer container_shadow" style={{
      'background-color': props.theme.body_color,
      'border-color': props.theme.contrast_color

    }}>
      <div className="footer_left">
        <Typography className="footer_name" style={{
          'color': props.theme.contrast_color
        }}>
          <a href={mediaLinks.socials["Linkedin"].link} target="_blank" style={{
          'color': props.theme.contrast_color
        }}>
            Lets Connect!
          </a>
        </Typography>
      </div>

      <div className="footer_right">
        <Typography className="footer_copyright" style={{
          'color': props.theme.contrast_color
        }}>
          Developed with <Favorite></Favorite> by{" "}
          <a href={mediaLinks.socials["Github"].link} target="_blank" style={{
          'color': props.theme.contrast_color
        }}>
            {personalData.name}
          </a>
        </Typography>
      </div>
    </div>
  );
};

export default Footer;
