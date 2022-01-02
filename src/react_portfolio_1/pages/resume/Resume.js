import React from 'react'

import ResumeData from '../../utils/resumeData'
import {Grid, Typography} from '@material-ui/core'

const Resume = () => {
    return (
        <>

        
            <Grid container className = 'section'>
                <Grid item className='section_title'>
                    <span></span>
                    <h6 className='section_title_text'>About Me</h6>
                </Grid>

                <Grid item xs={12}>
                    <Typography className='about_me_text'>{ResumeData.aboutMe}</Typography>
                </Grid>

            </Grid>

            <Grid container className='section'>

            </Grid>

            <Grid conatiner className='section'>

            </Grid>

            <Grid container className='section'>

            </Grid>

            <Grid container className='section'>

            </Grid>


        </>
    )
}

export default Resume
