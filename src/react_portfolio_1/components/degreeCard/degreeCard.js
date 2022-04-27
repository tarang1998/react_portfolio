import React from "react";
import "./DegreeCard.css";
import { Fade, Flip } from "react-reveal";
import { style } from "glamor";

function DegreeCard(props) {

  const degree = props.degree;
  const theme = props.theme;

 
  return (
    <div className="degreeCard">

      <Flip left duration={2000}>
        <div {...style_img}>
          <img
            style={{
              maxWidth: "100%",
              maxHeight: "100%",
              transform: "scale(-50%, -50%)",
            }}
            src={require(`../../assests/images/${degree.logo_path}`)}
            alt={degree.alt_name}
          />
        </div>
      </Flip>

      <Fade right duration={2000} distance="40px">
        <div {...card_body}>
          <div
            className="body-header"
            style={{ backgroundColor: theme.accentColor }}
          >
            <div className="body-header-title">
              <h2 className="card-title" style={{ color: "#FFFFFF" }}>
                {degree.title}
              </h2>
              <h3 className="card-subtitle" style={{ color: "#FFFFFF" }}>
                {degree.subtitle}
              </h3>
            </div>
            <div className="body-header-duration">
              <h3 className="duration" style={{ color: "#FFFFFF" }}>
                {degree.duration}
              </h3>
            </div>
          </div>
          <div classname="body-content">
            {degree.descriptions.map((sentence) => {
              return (
                <p className="content-list" style={{ color: theme.text }}>
                  {sentence}
                </p>
              );
            })}
            <a
              href={degree.website_link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", textAlign: "center" }}
            >
              <p
                {...button_visit}
                style={{
                  marginRight: "23px",
                  textDecoration: "none",
                  float: "right",
                  backgroundColor: theme.accentColor,
                }}
              >
                Visit Website
              </p>
            </a>
          </div>
        </div>
      </Fade>

    </div>
  );
}

export default DegreeCard;
