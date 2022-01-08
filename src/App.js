//import ReactPortfolio from './react_portfolio_0/ReactPortfolio';
import ReactPortfolio from "./react_portfolio_1/ReactPortfolio";

import React, { useState } from "react";

import {themes} from "./react_portfolio_1/utils/themeData"


function App() {

  const [selectedTheme, setTheme] = useState(()=>{
    // null coalescing 
    // returning dark theme by default 
    return localStorage.getItem("theme") || "dark" 
    
  })
  
  return (
      <div >
        {/* TODO : Research on Theme Provider */}
        <ReactPortfolio 
          theme={themes[selectedTheme]} 
          setTheme={setTheme}/>
      </div>
    
   
  );
}

export default App;
