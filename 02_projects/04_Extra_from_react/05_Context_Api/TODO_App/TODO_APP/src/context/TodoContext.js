import React,{createContext , useContext} from "react";

export const TodoContext = createContext({todos : [] ,
    addtodo : ()=>{},
    updatetodo : ()=>{},
    deletetodo : ()=>{},
    toggleCompleted : ()=>{},
    
})

export const TodoContextProvider = TodoContext.Provider
export const useTodo = ()=>{
    return useContext(TodoContext)
}