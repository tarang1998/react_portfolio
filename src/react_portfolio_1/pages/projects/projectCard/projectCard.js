import React from "react";
import { Fade } from "react-reveal";
import { style } from "glamor";
import "./projectCard.css"
import ProjectLanguages from "./projectLanguages/projectLanguages";
import { Grid } from "@material-ui/core";
import ProjectLinks from "./projectLinks/projectLinks";

export default function ProjectCard({ repo, theme }) {
  // function openRepoinNewTab(url) {
  //   var win = window.open(url, "_blank");
  //   win.focus();
  // }

  const styles = style({
    color: "rgb(88, 96, 105)",
    backgroundColor: "rgb(255, 255, 255)",
    boxShadow: "rgba(0, 0, 0, 0.2) 0px 10px 30px -15px",
    padding: "2rem",
    cursor: "pointer",
    borderRadius: "5px",
    height: "100%",
    transition: "all 0.2s ease-in-out",
    ":hover": {
      boxShadow: `${theme.imageDark} 0 2px 15px`,
    },
  });

  return (
    <div>
      <Fade bottom duration={2000} distance="40px">
        <div
          {...styles}
          key={repo.id}
          // onClick={() => openRepoinNewTab(repo.url)}
          style={{ backgroundColor: theme.projectCard }}
        >
          <div className="repo-name-div">
            <p className="repo-name" style={{ color: theme.contrast_color }}>
              {repo.name}
            </p>
          </div>
          <div className="repo-name-div">
            <p className="repo-subtitle" style={{ color: theme.contrast_color }}>
              {repo.subtitle}
            </p>
          </div>
          <p className="repo-description" style={{ color: theme.contrast_color }}>
            {repo.description}
          </p>
          <br />

          <div className="repo-details">
            <Grid container>
              <Grid item sm={6} xs={12}>
                <ProjectLanguages techStack={repo.techStack} />
              </Grid>
              <Grid item sm={6} xs={12}>
                <ProjectLinks urls={repo.urls??[]} />
              </Grid>
            </Grid>
          </div>
        </div>
      </Fade>
    </div>
  );
}
