import {  Grid } from "@material-ui/core";
import React from "react";
import ProjectImg from "../../utils/projectSVGs/projectImg";

import { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { projectData } from "../../utils/projectData";
import Fade from 'react-reveal/Fade';
import './project.css'
import ProjectCard from "./projectCard/projectCard";
import { style } from "glamor";



const Projects = () => {

  


  const currentTheme = useContext(ThemeContext)

  const styles = style({
    'color':currentTheme.contrast_color,
    backgroundColor: `${currentTheme.accentBright}`,
    ":hover": {
      boxShadow: `0 5px 15px ${currentTheme.accentBright}`,
    },
  });

 
  return (

    <div className="projects-main"
    style={{
      'color':currentTheme.contrast_color}}>

      <div className="basic-projects">

        <Fade  duration={4000} >

          <Grid container className="projects-heading-div">

            <Grid item xs={12} md={6} className="projectHeadingImage">
              <ProjectImg theme={currentTheme} />
            </Grid>

            <Grid item xs={12} md={6} className="projectHeadingText" >
              <div className="projectHeadingTextTitle">
                {projectData['title']}
              </div>

              <div className="projectHeadingTextSubtitle">
                {projectData['subtitle']}
              </div>

              <div className="projectHeadingTextDescription">
                {projectData['description']}
                
              </div>

            
            </Grid>

          </Grid>

        </Fade>

      </div>
      
      <div className="repo-cards-div-main">
        {projectData.projects.map((project) => {
          return <ProjectCard repo={project} theme={currentTheme} />;
        })}
      </div>
      <br />
      
      <a
        {...styles}
        className="general-btn"
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/tarang1998"

      >
        More Projects (Github)
      </a>
      

    </div>

  );
};

export default Projects;
