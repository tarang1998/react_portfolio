import { Typography } from '@material-ui/core'
import React from 'react'
import {Favorite} from '@material-ui/icons'

import './Footer.css'
import resumeData from '../../utils/resumeData';

const Footer = () => {
    return (
        <div className='footer'>

            <div className = 'footer_left'>
                <Typography className='footer_name'><a href={resumeData.socials['Linkedin'].link} target='_blank'>Lets Connect!</a></Typography>
            </div> 

            <div className = 'footer_right'>
                <Typography className='footer_copyright'>
                    Developed with <Favorite></Favorite> by <a href={resumeData.socials['Github'].link} target='_blank'>{resumeData.name}</a>
                </Typography>
            </div> 


        </div>
    )
}

export default Footer
