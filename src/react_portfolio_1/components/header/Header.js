import React , { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import "./Header.css";

import { Nav, Navbar } from "react-bootstrap";

import { NavLink, Link, withRouter, useLocation } from "react-router-dom";

import { HomeRounded, Telegram } from "@material-ui/icons";

import { mediaLinks } from "../../utils/portfolioData";

import CustomButton from "../button/button";
import { CgSun } from "react-icons/cg/";
import { HiMoon } from "react-icons/hi";


const Header = (props) => {

  //TODO : Glamor for CSS styling


  const location = useLocation();
  const pathName = location.pathname;

  function changeTheme() {
    if (props.theme.name === "light") {
      props.setTheme("dark");
      localStorage.setItem("theme", "dark");
    } else {
      props.setTheme("light");
      localStorage.setItem("theme", "light");
    }
  }

  const icon =
    props.theme.name === "dark" ? (
      <HiMoon
        size={30}
        color={"#A7A7A7"}
      />
    ) : (
      <CgSun
        size={30}
        color={"#F9D784"}
      />
    );

  const headerlinkStyle={
    'color' : props.theme.contrast_color
  }

  return (
    <Navbar 
    //sticky="top" 
    className="header container_shadow" 
    expand="lg"
    style = {{
      'border-color': props.theme.contrast_color
    }}
    >
      {/* Home */}

      <Nav.Link as={NavLink} to="/">
        <Navbar.Brand className="header_home" style={{
          'background-color':props.theme.contrast_color
        }}>
          <HomeRounded 
            style={{
              'color':props.theme.body_color
            }}/>
        </Navbar.Brand>
      </Nav.Link>

      <Navbar.Toggle />

      <Navbar.Collapse>
        <Nav className="header-left">
          {/* Resume Link */}
          <Nav.Link
            as={NavLink}
            to="/"
            className={pathName == "/" ? "header_link_active" : "header_link"}
            style = {headerlinkStyle}
          >
            Resume
          </Nav.Link>

          {/* Portfolio Link */}
          <Nav.Link
            as={NavLink}
            to="/portfolio"
            className={
              pathName == "/portfolio" ? "header_link_active" : "header_link"
            }
            style = {headerlinkStyle}

          >
            Portfolio
          </Nav.Link>
        </Nav>

        <div className="header-right">

          {/* {Object.keys(mediaLinks.socials).map((key) => (
            <a href={mediaLinks.socials[key].link} target="_blank">
              {mediaLinks.socials[key].icon}
            </a>
          ))} */}

          {/* <CustomButton text={"Hire Me"} icon={<Telegram />} /> */}

          <button style={{
            cursor: "pointer",
            height: "45px",
            width: "45px",
            borderRadius: "50%",
            border: "none",
            // alignItems: "center",
            // justifyContent: "center",
            backgroundColor: props.theme.name === "light" ? "#7CD1F7" : "#292C3F",
            outline: "none",
            transition: "all 0.2s ease-in-out",
            ":hover": {
              boxShadow: `0 3px 8px ${
                props.theme.name === "light" ? "#F7D774" : "#646464"
              }`,
            },
          }} 
          onClick={changeTheme}>
            {icon}
          </button>

        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default withRouter(Header);
