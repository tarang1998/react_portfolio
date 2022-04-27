import { Typography } from "@material-ui/core";
import React from "react";
import CustomTimeline, { CustomTimelineItem, CustomTimelineSeparator } from "../timeline/Timeline";

import "./Profile.css";

import { mediaLinks, personalData } from "../../utils/portfolioData";
import { TimelineItem } from "@material-ui/lab";
import TimelineContent from "@material-ui/lab/TimelineContent";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import GetAppIcon from "@material-ui/icons/GetApp";
import CustomButton from "../button/button";
import { Email } from "@material-ui/icons";
import Fade from 'react-reveal/Fade';
import RubberBand from 'react-reveal/RubberBand';



const Profile = (props) => {

  return (
    <Fade duration={1000} left>
      <div className="profile container_shadow "
        style = {{
          'background-color': props.theme.body_color,
          'border-color': props.theme.contrast_color,
         
        

        }}
        >
        <RubberBand duration={2000}>
           <div className="profile_name">
            <Typography className="name" style ={{'color': props.theme.contrast_color}}>{personalData.name}</Typography>
            <Typography className="title" style = {{'color': props.theme.contrast_color}}>{personalData.title}</Typography>
          </div>  
        </RubberBand>
       

        <figure className="profile_image">
          <img src={require("../../assets/images/tarang1.jpg").default} alt="" />
        </figure>

        <RubberBand duration={2000}>
          <div className="profile_information">
            <CustomTimeline
              icon={<PersonOutlineOutlinedIcon 
                style ={{
                  'color': props.theme.body_color
                }}/>}

              children={
                <div>
                  <CustomTimelineItem icon={<Email />} text={personalData.email} theme={props.theme} hideConnector = {true}/>
                  {/* <CustomTimelineItem  text={personalData.contact} theme={props.theme} hideConnector = {true}/>
                  <CustomTimelineItem  text={personalData.birthday} theme={props.theme} hideConnector = {true}/> */}

                  {Object.keys(mediaLinks.socials).map((key) => (
                    <CustomTimelineItem
                      icon ={mediaLinks.socials[key].icon}
                      text={mediaLinks.socials[key].text}
                      link={mediaLinks.socials[key].link}
                      theme={props.theme}
                      hideConnector = {true}
                    />
                  ))}
                </div>
              }
              hideConnector = {true}
              theme = {props.theme}
            />

            {/* <div className="button-container">
              <CustomButton text={"Download CV"} icon={<GetAppIcon />} />
            </div>
            */}
            
          </div>
        </RubberBand>


        
      </div>
    </Fade>
  );
};

export default Profile;
