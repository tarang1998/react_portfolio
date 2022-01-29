import { Grid } from "@material-ui/core";
import React from "react";
import EducationImg from "../../utils/educationSVGs/educationImg";
import './education.css'

import { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { education } from "../../utils/educationData";

import { DarkTheme, LightTheme, ThemeProvider } from "baseui"; // Default Theming of baseUI


const Education = () => {

  const currentTheme = useContext(ThemeContext)


  return (


      <div class='educationPage' >
        <Grid container className="educationHeading">

          <Grid item xs={12} md={5} className="educationHeadingImage">
              <EducationImg theme={currentTheme}/>
          </Grid>

          <Grid item xs={12} md={7} className="educationHeadingText">

            <div className="educationHeadingTextTitle">
              {education['title']}
            </div>

            <div className="educationHeadingTextSubtitle">
              {education['subtitle']}
            </div>

            <div className="educationHeadingTextDescription">
              {education['description']}
            </div>

          </Grid>

        </Grid> 
      </div>


  );
};

export default Education;
