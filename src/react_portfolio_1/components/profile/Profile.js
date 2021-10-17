import { Typography } from '@material-ui/core'
import React from 'react'
import CustomTimeline , {CustomTimelineSeparator} from '../timeline/Timeline'

import './Profile.css';

import resumeData  from '../../utils/resumeData';
import { TimelineItem } from '@material-ui/lab';
import TimelineContent from '@material-ui/lab/TimelineContent';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined'


const CustomTimelineItem = ({title , text , link}) => (
    <TimelineItem>
        <CustomTimelineSeparator/>
        <TimelineContent className='timeline-content'>
            {link ? 
                (<Typography className = 'timeline-item-text'>
                    <span>{title}</span>{' : '}<a href={link} target="_blank">{text}</a>
                </Typography>) : 
                (<Typography className = 'timeline-item-text'>
                    <span>{title}</span>{' : '}{text}
                </Typography>
                )}
        </TimelineContent>
    </TimelineItem>
);


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
                <CustomTimeline icon={<PersonOutlineOutlinedIcon/>} children={
                    <div>
                        <CustomTimelineItem title= 'Email' text={resumeData.email}/>
                        <CustomTimelineItem title= 'Contact' text={resumeData.contact}/>
                        <CustomTimelineItem title= 'D.O.B' text={resumeData.birthday}/>



                        {Object.keys(resumeData.socials).map((key)=>(
                            <CustomTimelineItem title={key} text={resumeData.socials[key].text} link={resumeData.socials[key].link}/>
                        ))}
                    </div>
                }/>
                <br/>
                <button>My button</button>
            </div>
        </div>
    )
}

export default Profile
