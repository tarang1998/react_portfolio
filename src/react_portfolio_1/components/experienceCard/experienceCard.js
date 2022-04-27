import React from "react";
import './experienceCard.css'

import { DarkTheme, LightTheme, ThemeProvider } from "baseui"; // Default Theming of BaseUI


function ExperienceCard(props) {

    const experience = props.experience;
    const theme = props.theme;

    return(

        <ThemeProvider theme={theme.name === "light" ? LightTheme : DarkTheme}>  

            <div className="experienceCard" style={{
                'border' : `1px solid `,
                'background-color': theme.projectCard,
            }}>

        
                <div className="experienceCardLogoDiv">

                    <a
                    href={experience["company_url"]}
                    target="_blank"
                    rel="noopener noreferrer">

                        <img
                            className="experienceCardLogo"
                            src={require(`../../assets/experienceImages/${experience['logo_path']}`).default}
                            alt=''
                        />  
                            
                    </a>

                
                </div>

                <div className="experienceCardBodyDiv">

                    <div className="experienceCardHeaderDiv">

                        <div className="experienceCardHeaderLeftDiv">

                            <h3 className="experienceCardHeaderTitle">
                                {experience["title"]}
                            </h3>

                            <p className="experienceCardCompany">
                                <a
                                    href={experience["company_url"]}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {experience["company"]}
                                </a>
                            </p>

                        </div>

                        <div className="experienceCardHeaderRightDiv">
                            <p
                            className="experienceCardDuration"
                            style={{ color: theme.secondaryText }}
                            >
                                {experience["duration"]}
                            </p>
                            
                        </div>

                    </div>

                    

                    <div className="experienceCardDescription">
                        {}
                        {experience["description"].map((element) => {
                            return (
                                <div className="experienceCardDescriptionElement">
                                    <div>
                                        {element['icon']}
                                    </div>
                                    <p className="experienceCardDescriptionElementText">
                                        {element['text']}
                                    </p>
                                    <br/>
                                </div>   
                            );
                        })}
                    </div>
                    
                </div>


            </div>

        </ThemeProvider>

    );




          







}

export default ExperienceCard;
