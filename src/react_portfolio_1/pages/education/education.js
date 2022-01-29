import { Grid } from "@material-ui/core";
import React from "react";
import EducationImg from "../../utils/educationSVGs/educationImg";
import './education.css'

import { useContext } from 'react'
import { ThemeContext } from 'styled-components'



const Education = () => {

  const currentTheme = useContext(ThemeContext)


  return (
    <div class='educationPage'>
      <Grid container className="educationHeading">

        <Grid item xs={12} md={5} className="educationHeadingImage">
            <EducationImg theme={currentTheme}/>
        </Grid>

        <Grid item xs={12} md={7} className="educationHeadingText">
          
          
        </Grid>

      </Grid> 
    </div>
  );
};

export default Education;
