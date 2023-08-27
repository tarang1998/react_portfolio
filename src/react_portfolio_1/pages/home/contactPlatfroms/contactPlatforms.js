import React from "react";
import "./contactPlatforms.css";
import { OverlayTrigger, Tooltip } from "react-bootstrap";


function ContactPlatFroms(props) {
  return (
      <div className="contact-platforms-div">
        <ul className="dev-icons">
          {props.contactPlatforms.map((contactPlatform) => {
            return (
              <OverlayTrigger
                key={contactPlatform.platform}
                placement={"top"}
                overlay={
                  <Tooltip id={`tooltip-top`}>
                    <strong>{contactPlatform.platform}</strong>
                  </Tooltip>
                }
              >
                <li className="contact-platforms-inline" name={contactPlatform.platform}>
                  <a href={contactPlatform.link}
                  target="_blank"
                  rel="noopener noreferrer">
                    <span
                      className="iconify"
                      data-icon={contactPlatform.iconifyIconId}
                      style={contactPlatform.style}
                      data-inline="false"
                    ></span>
                  </a>
                </li>
              </OverlayTrigger>
            );
          })}
        </ul>
      </div>
  );
}

export default ContactPlatFroms;
