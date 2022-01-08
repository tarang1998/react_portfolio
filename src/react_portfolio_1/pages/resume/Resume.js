import React from "react";

import { introduction } from "../../utils/portfolioData";
import { Grid, Typography } from "@material-ui/core";

const Resume = (props) => {
  return (
    <>
      <Grid container className="section">
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
      </Grid>

      <Grid container className="section"></Grid>

      <Grid conatiner className="section"></Grid>

      <Grid container className="section"></Grid>

      <Grid container className="section"></Grid>
    </>
  );
};

export default Resume;
