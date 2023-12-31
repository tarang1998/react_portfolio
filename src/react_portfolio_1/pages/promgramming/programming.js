import { Grid } from "@material-ui/core";
import React from "react";
import { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { programming } from "../../utils/programmingData";
import Fade from 'react-reveal/Fade';
import EducationImg from "../../utils/educationSVGs/educationImg";
import "./programming.css"
import ProgrammingPlatForms from "./programmingPlatforms/programmingPlatforms"
import SoftwareDevelopmentImg from "../../utils/skillSVGs/SoftwareDevelopmentImg";
import { experience } from "../../utils/experienceData";
import ExperienceAccordion from "../../components/experienceAccordian/experienceAccordian";

const Programming = () => {

  const currentTheme = useContext(ThemeContext)


  return (


    <div className='programmingPage' style={{
      'color': currentTheme.contrast_color
    }} >

      <Fade duration={4000}>

        <Grid container className="programmingHeading">

          <Grid item xs={12} md={7} className="programmingHeadingText" >

            <div className="programmingHeadingTextTitle">
              {programming['title']}
            </div>

            <div className="programmingHeadingTextDescription">
              {programming['description']}
            </div>

            <ProgrammingPlatForms programmingPlatforms={programming.competitiveProgrammingPlatforms} />


          </Grid>

          <Grid item xs={12} md={5} className="programmingHeadingImage">
            <SoftwareDevelopmentImg theme={currentTheme} />
          </Grid>



        </Grid>

      </Fade>

      <Fade duration={2000} right>

        <ExperienceAccordion sections={experience['sections']} />

      </Fade>


    </div>




  );
};

export default Programming;
