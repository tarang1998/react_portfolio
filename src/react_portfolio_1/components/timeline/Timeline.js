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


const CustomTimeline = ({
  title , icon , children, theme, hideConnector=false}) => {
    return (
        <Timeline className = {'timeline'}>

        {/* Timeline Header  */}
        <TimelineItem className = {'timeline-first-item'}>
          <TimelineSeparator>
            <TimelineDot className = {'timeline-dot-header'} style={{
              'background-color': theme.contrast_color
            }} >
                {icon}
            </TimelineDot>
            {(hideConnector === false) ? <TimelineConnector /> : <div></div>}
          </TimelineSeparator >
          <TimelineContent>
              <Typography variant='h6' className = {'timeline-header'}>
                    {title}
              </Typography>
          </TimelineContent>
        </TimelineItem>

        {children}

        {/* Timeline Items */}
        {/* <TimelineItem>
          <CustomTimelineSeparator />
          <TimelineContent className ={'timeline-content'}></TimelineContent>
        </TimelineItem> */}

        
       
      </Timeline>
    )
}


export const CustomTimelineSeparator = (theme) => (
    <TimelineSeparator className = {'separator-padding'} >
            <TimelineDot  className = {'timeline-dot'} style={{
              'background-color' : theme.contrast_color,
            }}/>
            <TimelineConnector style={{
              'background-color': theme.contrast_color ,
            }}/>
    </TimelineSeparator>
);

export const CustomTimelineItem = ({ title, text, link , icon , theme, hideConnector=false }) => (

  <TimelineItem>
     {(hideConnector === false) ? <CustomTimelineSeparator theme={theme}/> : <div></div>}
    <TimelineContent className="timeline-content">
      {link ? (
        <Typography className="timeline-item-text" style={{
          'color': theme.contrast_color
        }}>
          <a href={link} target="_blank" style ={{
            'color': theme.contrast_color
          }}>
            {icon}
          </a>
          {title?<span>{` ${title} :`}</span> : <></>}
          <a href={link} target="_blank" style ={{
            'color': theme.contrast_color
          }}>
            {"  "}{text}
          </a>
        </Typography>
      ) : (
        <Typography className="timeline-item-text" style={{
          'color': theme.contrast_color
        }}>
          {icon}
          {title  ? <span>{` ${title} :`}</span> : <></>}
          {"  "}{text}
        </Typography>
      )}
    </TimelineContent>
  </TimelineItem>
);

export default CustomTimeline
