import React, {useContext} from 'react'
import { ThemeContext } from 'styled-components';
import Fade from 'react-reveal/Fade';
import './skills.css'

function Skills(props){

    const currentTheme = useContext(ThemeContext)

    return(
        <>
            <div className="skills">
                <div className="skills-header-div">
                    <Fade bottom duration={2000} >
                        <h1 className="skills-header" style={{ color: currentTheme.contrast_color }}>
                            Here's what I do
                        </h1>
                    </Fade>
                </div>
            </div>
        </>
    )


}

export default Skills;