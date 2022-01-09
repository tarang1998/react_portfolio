import React from "react";

import { greetingData, introduction, personalData } from "../../utils/portfolioData";
import { Grid  } from "@material-ui/core";

import { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import Fade from 'react-reveal/Fade';
import FeelingProud from "../../components/feelingProud/FeelingProud";
import './greeting.css'


const Greetings = () => {

  const currentTheme = useContext(ThemeContext)

  return (
    <>
      

      <Fade duration={4000}>

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

            <FeelingProud theme={currentTheme}/>
            
          </Grid>

        </Grid>

      </Fade>

      
    </>
  );
};

export default Greetings;
