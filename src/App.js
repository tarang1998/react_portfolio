//import ReactPortfolio from './react_portfolio_0/ReactPortfolio';
import ReactPortfolio from "./react_portfolio_1/ReactPortfolio";

import React, { useState } from "react";

import {themes} from "./react_portfolio_1/utils/themeData"
import { ThemeProvider } from "styled-components";


function App() {

  const [selectedTheme, setTheme] = useState(()=>{
    // null coalescing 
    // returning dark theme by default 
    return localStorage.getItem("theme") || "dark" 
    
  })
  
  return (
      <div >
        <ThemeProvider theme={themes[selectedTheme]}>
          <ReactPortfolio 
            theme={themes[selectedTheme]} 
            setTheme={setTheme}/>
        </ThemeProvider>
      </div>
    
   
  );
}

export default App;
