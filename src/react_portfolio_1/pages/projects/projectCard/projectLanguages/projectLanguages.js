import React from "react";
import "./projectLanguages.css";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { projectData } from "../../../../utils/projectData";

function ProjectLanguages(props) {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons-languages">
          {props.techStack.map((tech) => {
            return (
              <OverlayTrigger
                key={projectData["techStacks"][tech].name}
                placement={"top"}
                overlay={
                  <Tooltip id={`tooltip-top`}>
                    <strong>{projectData["techStacks"][tech].name}</strong>
                  </Tooltip>
                }
              >
                <li
                  className="software-skill-inline-languages"
                  name={projectData["techStacks"][tech].name}
                >
                  <span
                    className="iconify"
                    data-icon={projectData["techStacks"][tech].iconifyClass}
                    style={projectData["techStacks"][tech].style}
                    data-inline="false"
                  ></span>
                </li>
              </OverlayTrigger>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default ProjectLanguages;
