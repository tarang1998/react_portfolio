import React from "react";

import { greetingData, introduction, personalData } from "../../utils/portfolioData";
import { Grid, Typography  } from "@material-ui/core";
import './home.css'

import { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import Fade from 'react-reveal/Fade';
import FeelingProud from "../../utils/feelingProud/FeelingProud";


const Home = (props) => {

  const currentTheme = useContext(ThemeContext)

  return (
    <>
      {/* <Grid container className="section">
        <Grid item className="section_title">
          <span></span>
          <h6 className="section_title_text" style={{
            'color':props.theme.contrast_color
          }}>About Me</h6>
        </Grid>

        <Grid item xs={12}>
          <Typography className="about_me_text" style={{
            'color':props.theme.contrast_color
          }}>
            {introduction.aboutMe}
          </Typography>
        </Grid>
      </Grid> */}

      <Fade duration={5000}>

        <Grid container className="greeting">

          <Grid item xs={12} md={5} className="greeting-text-grid">
            <div style={{
              color: currentTheme.contrast_color
            }}>
              <h1 className="greeting-title">{greetingData.title}</h1>
              <p className="greeting-sub-title">
                <span>I'm </span>
                <span>
                  {personalData.name}.{" "}
                </span>
              </p>
              <p className="greeting-p">{introduction.aboutMe}</p>
            


            </div>
          </Grid>

          <Grid item xs={12} md={7} className='greeting-image-grid'>

            {/* <img src={require("../../assets/images/tarang.jpg").default} alt=""  style={{'maxWidth':500}}/> */}
            <FeelingProud theme={currentTheme}/>
            
          </Grid>

        </Grid>

      </Fade>

      

      <Grid conatiner className="section"></Grid>

      <Grid container className="section"></Grid>

      <Grid container className="section"></Grid>
    </>
  );
};

export default Home;
