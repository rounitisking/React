import { createContext , useContext} from "react";
import themeContext from "./themeContext";

export const projectThemeContext = createContext({
    themeMode : "light",
    lightTheme : ()=>{},
    darkTheme : ()=>{}
})


export const projectThemeProvider = themeContext.Provider

export default function usetheme(){
    return useContext(projectThemeContext)
}