import { Typography } from "@material-ui/core";
import React from "react";
import CustomTimeline, { CustomTimelineSeparator } from "../timeline/Timeline";

import "./Profile.css";

import { mediaLinks, personalData } from "../../utils/portfolioData";
import { TimelineItem } from "@material-ui/lab";
import TimelineContent from "@material-ui/lab/TimelineContent";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import GetAppIcon from "@material-ui/icons/GetApp";
import CustomButton from "../button/button";

const CustomTimelineItem = ({ title, text, link }) => (
  <TimelineItem>
    <CustomTimelineSeparator />
    <TimelineContent className="timeline-content">
      {link ? (
        <Typography className="timeline-item-text">
          <span>{title}</span>
          {" : "}
          <a href={link} target="_blank">
            {text}
          </a>
        </Typography>
      ) : (
        <Typography className="timeline-item-text">
          <span>{title}</span>
          {" : "}
          {text}
        </Typography>
      )}
    </TimelineContent>
  </TimelineItem>
);

const Profile = () => {
  return (
    <div className="profile container_shadow ">
      <div className="profile_name">
        <Typography className="name">{personalData.name}</Typography>
        <Typography className="title">{personalData.title}</Typography>
      </div>

      <figure className="profile_image">
        <img src={require("../../assets/images/tarang.jpg").default} alt="" />
      </figure>

      <div className="profile_information">
        <CustomTimeline
          icon={<PersonOutlineOutlinedIcon />}
          children={
            <div>
              <CustomTimelineItem title="Email" text={personalData.email} />
              <CustomTimelineItem title="Contact" text={personalData.contact} />
              <CustomTimelineItem title="D.O.B" text={personalData.birthday} />

              {Object.keys(mediaLinks.socials).map((key) => (
                <CustomTimelineItem
                  title={key}
                  text={mediaLinks.socials[key].text}
                  link={mediaLinks.socials[key].link}
                />
              ))}
            </div>
          }
        />

        <div className="button-container">
          <CustomButton text={"Download CV"} icon={<GetAppIcon />} />
        </div>
      </div>
    </div>
  );
};

export default Profile;
