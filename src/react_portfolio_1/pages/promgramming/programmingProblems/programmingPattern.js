import React from "react";
import { Accordion, Panel } from "baseui/accordion";
import './programmingPattern.css'
import { DarkTheme, LightTheme, ThemeProvider } from "baseui"; // Default Theming of baseUI
import { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import ProblemCard from "../problemCard/problemCard";
// import ExperienceCard from "../experienceCard/experienceCard";


function ProgrammingPatternAccordian(props) {

  const currentTheme = useContext(ThemeContext)

  return (
    <div className="programmingAccordian" style={{

      'border-width': '0.1px',
      'border-style': 'groove',
      'border-color': currentTheme.contrast_color,
      'border-radius': '5px'

    }}>

      <ThemeProvider theme={currentTheme.name === "light" ? LightTheme : DarkTheme}>

        <Accordion 
        // onChange={({ expanded }) => console.log(expanded)}
        >
          {props.programmingPatterns.map((programmingPattern) => {
            if (props.programmingProblems.has(programmingPattern["pattern"])) {
              return (
                <Panel
                
                  className="accordianPanel"
                  title={programmingPattern["name"]}
                  key={programmingPattern["name"]}
                >
                  {props.programmingProblems.get(programmingPattern["pattern"]).map((programmingProblem)=>{
                    return (
                      <ProblemCard problem={programmingProblem} theme={currentTheme}/>
                    );
                  })}

            

                </Panel>
              );
            }
            else {
              return <></>
            }

          })}
        </Accordion>

      </ThemeProvider>

    </div>
  );
}

export default ProgrammingPatternAccordian;
