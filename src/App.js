//import ReactPortfolio from './react_portfolio_0/ReactPortfolio';
import ReactPortfolio from "./react_portfolio_1/ReactPortfolio";

import React, { useState, useEffect } from "react";

import {themes} from "./react_portfolio_1/utils/themeData"
import { ThemeProvider } from "styled-components";
import './App.css';
import { settings } from "./react_portfolio_1/settings"
import ReactGA from "react-ga";

function App() {

  useEffect(() => {
    if (settings.googleTrackingID) {
      ReactGA.initialize(settings.googleTrackingID,);
      ReactGA.pageview(window.location.pathname + window.location.search);
    }
  }, []);

  const [selectedTheme, setTheme] = useState(()=>{
    // null coalescing 
    // returning light theme by default 
    return localStorage.getItem("theme") || "light" 
    
  })
  
  return (
      <div className="app">
        <ThemeProvider theme={themes[selectedTheme]}>
          <ReactPortfolio 
            theme={themes[selectedTheme]} 
            setTheme={setTheme}/>
        </ThemeProvider>
      </div>
    
   
  );
}

export default App;
