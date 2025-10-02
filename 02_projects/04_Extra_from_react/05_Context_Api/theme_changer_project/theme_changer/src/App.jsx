import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Card ,ThemeBtn} from "./components/index"
import ThemeContextProvider from "./context/ThemeContextProvider"
import {projectThemeProvider} from "./context/theme"
function App() {
  const [themeMode, setthememode] = useState("light")
  function lightTheme() {
    setthememode("light")  
  }
  function darkTheme() {
    setthememode("dark")  
  }
  return (

//     <projectThemeProvider value={{
//     themeMode,
//     lightTheme,
//     darkTheme
// }}>

<ThemeContextProvider>

   
<div className="flex flex-wrap min-h-screen items-center">
  
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                         

     
      <ThemeBtn/>
    
                    </div>
                         

     
      <Card/>
    

                    <div className="w-full max-w-sm mx-auto">
                       
                    </div>
                </div>
            </div>
    {/* </projectThemeProvider> */}
</ThemeContextProvider>


  )
    
  
  
}

export default App
