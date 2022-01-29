import {  Grid } from "@material-ui/core";
import React from "react";
import EducationImg from "../../utils/educationSVGs/educationImg";
import './education.css'

import { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { education } from "../../utils/educationData";
import Fade from 'react-reveal/Fade';



const Education = () => {

  const currentTheme = useContext(ThemeContext)


  return (


      <div class='educationPage' style={{
        'color':currentTheme.contrast_color
      }} >

        <Grid container className="educationHeading">

          <Grid item xs={12} md={5} className="educationHeadingImage">
              <EducationImg theme={currentTheme}/>
          </Grid>

          <Grid item xs={12} md={7} className="educationHeadingText" >

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

        <div className="educationDegreesDiv">
          <Fade bottom duration={2000} distance="20px">

            <h1 className="educationDegreesDivHeader">
              Degrees Received
            </h1>

          </Fade>

          <div className="educationDegreesDivBody">
            {education['degrees'].map((degree)=>{
              
            })}

          </div>


        </div>


      </div>


  );
};

export default Education;
