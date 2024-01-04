import React from "react";
import "./problemSolutionLinks.css";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { programming } from "../../../../utils/programmingData";
 


function ProblemSolutionLinks(props) {

  return (
      <div className="problem-links-div">
        <ul className="dev-icons">
          {props.links.map((link) => {


            const type = link['type']
            const url = link['url']
            const solType = programming.solutionType[type]

            return (
              <OverlayTrigger
                key={solType.name}
                placement={"top"}
                overlay={
                  <Tooltip id={`tooltip-top`}>
                    <strong>{solType.name}</strong>
                  </Tooltip>
                }
              >
                <li className="problem-links-inline" name={solType.name}>
                  <a href={url}
                  target="_blank"
                  rel="noopener noreferrer">
                    <span
                      className="iconify"
                      data-icon={solType.iconifyIconId}
                      style={solType.style}
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

export default ProblemSolutionLinks;
