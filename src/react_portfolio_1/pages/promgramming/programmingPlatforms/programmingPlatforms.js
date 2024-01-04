import React from "react";
import "./programmingPlatforms.css";
import { OverlayTrigger, Tooltip } from "react-bootstrap";


function ProgrammingPlatForms(props) {
  return (
      <div className="programming-platforms-div">
        <ul className="dev-icons">
          {props.programmingPlatforms.map((programmingPlatform) => {
            return (
              <OverlayTrigger
                key={programmingPlatform.platform}
                placement={"top"}
                overlay={
                  <Tooltip id={`tooltip-top`}>
                    <strong>{programmingPlatform.platform}</strong>
                  </Tooltip>
                }
              >
                <li className="programming-platforms-inline" name={programmingPlatform.platform}>
                  <a href={programmingPlatform.link}
                  target="_blank"
                  rel="noopener noreferrer">
                    <span
                      className="iconify programmingPlatformIcons"
                      data-icon={programmingPlatform.iconifyIconId}
                      style={programmingPlatform.style}
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

export default ProgrammingPlatForms;
