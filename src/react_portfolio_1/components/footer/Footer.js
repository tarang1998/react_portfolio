import { Typography } from "@material-ui/core";
import React from "react";
import { Favorite } from "@material-ui/icons";

import "./Footer.css";
import { mediaLinks, personalData } from "../../utils/portfolioData";

const Footer = () => {
  return (
    <div className="footer container_shadow">
      <div className="footer_left">
        <Typography className="footer_name">
          <a href={mediaLinks.socials["Linkedin"].link} target="_blank">
            Lets Connect!
          </a>
        </Typography>
      </div>

      <div className="footer_right">
        <Typography className="footer_copyright">
          Developed with <Favorite></Favorite> by{" "}
          <a href={mediaLinks.socials["Github"].link} target="_blank">
            {personalData.name}
          </a>
        </Typography>
      </div>
    </div>
  );
};

export default Footer;
