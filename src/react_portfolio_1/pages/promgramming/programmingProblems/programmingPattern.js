import React from "react";
import { Accordion, Panel } from "baseui/accordion";
import './programmingPattern.css'
import { DarkTheme, LightTheme, ThemeProvider } from "baseui"; // Default Theming of baseUI
import { useContext } from 'react'
import { ThemeContext } from 'styled-components'
// import ExperienceCard from "../experienceCard/experienceCard";


function ProgrammingPatternAccordian(props) {

  const currentTheme = useContext(ThemeContext)

  console.log(props)


  return (
    <div className="programmingAccordian" style={{
    
      'border-width': '0.1px',
      'border-style': 'groove',
      'border-color': currentTheme.contrast_color,
      'border-radius' : '5px'

    }}>

    <ThemeProvider theme={currentTheme.name === "light" ? LightTheme : DarkTheme}>

        <Accordion onChange={({ expanded }) => console.log(expanded)}>
          {props.programmingPatterns.map((programmingPattern) => {
            return (
              <Panel
                className="accordianPanel"
                title={programmingPattern["name"]}
                key={programmingPattern["name"]}
              >
                
                {/* {section["experiences"].map((experience) => {
                  return (
                    <ExperienceCard experience={experience} theme={currentTheme} />
                  );
                })} */}
                
              </Panel>
            );
          })}
        </Accordion>

    </ThemeProvider>

    </div>
  );
}

export default ProgrammingPatternAccordian;
