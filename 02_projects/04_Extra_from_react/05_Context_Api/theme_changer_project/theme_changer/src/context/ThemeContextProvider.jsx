import React,{useState} from 'react'
import themeContext from "./themeContext"
function ThemeContextProvider({children}) {

    const [theme , settheme] = useState("light")

  return (
    <themeContext.Provider value={{theme , settheme}}>
        {children}
    </themeContext.Provider>
  )
}

export default ThemeContextProvider