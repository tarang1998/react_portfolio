import React from 'react'
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import WorkIcon from '@material-ui/icons/Work';
import { Typography } from '@material-ui/core';
import './Timeline.css'


const CustomTimeline = ({title , icon , children}) => {
    return (
        <Timeline className = {'timeline'}>

        {/* Timeline Header  */}
        <TimelineItem className = {'timeline-first-item'}>
          <TimelineSeparator>
            <TimelineDot className = {'timeline-dot-header'} >
                {<WorkIcon/>}
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
              <Typography variant='h6' className = {'timeline-header'}>
                    {title}
              </Typography>
          </TimelineContent>
        </TimelineItem>

        {children}

        {/* Timeline Items */}
        <TimelineItem>
          <CustomTimelineSeparator />
          <TimelineContent>Code</TimelineContent>
        </TimelineItem>
       
      </Timeline>
    )
}


export const CustomTimelineSeparator = () => (
    <TimelineSeparator className = {'separator-padding'}>
            <TimelineDot className = {'timeline-dot'}/>
            <TimelineConnector />
    </TimelineSeparator>
);

export default CustomTimeline
