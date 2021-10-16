import { Typography } from '@material-ui/core'
import React from 'react'
import CustomTimeline from '../timeline/Timeline'

import './Profile.css';

import resumeData  from '../../utils/resumeData';


const Profile = () => {
    return (
        <div className = 'profile container_shadow'>
            
            <div className = 'profile_name'>
                <Typography className ='name'>
                    {resumeData.name}
                </Typography>
                <Typography className ='title'>
                    {resumeData.title}
                </Typography>
            </div>

            <figure className ='profile_image'>
                <img src={require('../../assets/images/tarang.jpg').default} alt='' />
            </figure>

            <div className='profile_information'>
                <CustomTimeline />
                <br/>
                <button>My button</button>
            </div>
        </div>
    )
}

export default Profile
