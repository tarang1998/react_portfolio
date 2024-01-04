import React from "react";
import "./projectLinks.css";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { projectData } from "../../../../utils/projectData";

function ProjectLinks(props) {

    function openInNewTab(url) {
        var win = window.open(url, "_blank");
        win.focus();
    }

    return (
        <div>
            <div className="tech-platforms-main-div">
                <ul className="dev-icons-platforms">
                    {props.urls.map((url) => {
                        return (
                            <div
                                onClick={() => openInNewTab(url.url)}
                            >
                                <OverlayTrigger


                                    key={projectData["platforms"][url.name].name}
                                    placement={"top"}
                                    overlay={
                                        <Tooltip id={`tooltip-top`}>
                                            <strong>{projectData["platforms"][url.name].name}</strong>
                                        </Tooltip>
                                    }
                                >
                                    <li
                                        className="tech-platforms-inline-platform"
                                        name={projectData["platforms"][url.name].name}
                                    >
                                        <span
                                            className="iconify"
                                            data-icon={projectData["platforms"][url.name].iconifyClass}
                                            style={projectData["platforms"][url.name].style}
                                            data-inline="false"
                                        ></span>
                                    </li>
                                </OverlayTrigger>
                            </div>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}

export default ProjectLinks;
