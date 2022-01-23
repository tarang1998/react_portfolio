import { Grid } from '@material-ui/core'
import React from 'react'
import ExperienceImg from '../../utils/experienceSVGs/experienceImg'
import { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import './workExperience.css'
import { experience } from '../../utils/experienceData'

const WorkExperience = () => {

    const currentTheme = useContext(ThemeContext)


    console.log(experience['title'])

    return (
        <Grid container xs={12} style={{
            
        }}>

            <Grid item xs={12}  sm={12} md={6} className='workExperienceImageGrid' >
                <ExperienceImg theme={currentTheme} />
            </Grid>

            <Grid item xs={12} sm={12} md={6} className='workExperienceTextGrid'>
                <h1
                    className="workExperienceTextGridHeadingText"
                    style={{ color: currentTheme.contrast_color }}
                >
                    {experience['title']}
                   
                </h1>
                <h3
                    className="workExperienceTextGridSubHeadingText"
                    style={{ color: currentTheme.contrast_color }}
                >
                    {experience["subtitle"]}
                   
                </h3>
                <p
                    className="workExperienceTextGridDescription"
                    style={{ color: currentTheme.contrast_color }}
                >
                    {experience["description"]}
                    <a className="workExperienceTextGridDescriptionCompanyURL" href={experience['currentCompanyWebsiteLink']}>
                        {experience['currentCompanyName']}
                    </a>
                </p>
            </Grid>

        </Grid>
    )
}

export default WorkExperience
