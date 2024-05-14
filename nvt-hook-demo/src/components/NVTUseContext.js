import React, { createContext, useContext, useState } from 'react'
import NVTUseContext1 from './NVTUseContext1';
export const ThemeContext = createContext(`red`); //Tạo ngữ cảnh để chia sẻ
export default function  NVTUseContext() {
    //state
    const [Theme,setTheme]=useState(`red`);

    
  return (
    <ThemeContext.Provider value={Theme}>
    <div>
        <h2>Demo UseContext </h2>
        <NVTUseContext1/>
        
    </div> 
    </ThemeContext.Provider>
    
  )
}
