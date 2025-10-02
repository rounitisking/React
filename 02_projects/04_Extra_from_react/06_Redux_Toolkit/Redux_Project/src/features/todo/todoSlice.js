// here we are making reducers which are also called as slice 
/* 
Reducer = function that updates state based on action.

Slice = Redux Toolkit feature → it combines reducer + initial state + actions in one place.
 */

//here nanoid is used to generate unique id
import { createSlice , nanoid } from "@reduxjs/toolkit";

const initialState ={
    todos : JSON.parse(localStorage.getItem("todo")) ||  []
}



export const todoSlice = createSlice({
    name : "todo",
    initialState ,
    reducers : {
        // yaha pr hame state mai initial ya state ki currect vale milti hai and action mai normal fucntion ke parameters 
    addtodo : (state , action)=>{
        const todo = {
            id : nanoid(), 
            msg : action.payload.msg,
            completed : action.payload.completed
        }

        state.todos.push(todo)
    },
    deletetodo : (state , action)=>{
        // yaha pr ek error ye aa raha tha ki mai filter tho kr raha hu but state.todos ko update nhi kr rhe 
           state.todos =  state.todos.filter(ele => ele.id !== action.payload.id)
           
    },
    updatetodo : (state , action)=>{

            state.todos.map((e)=>{
                if(e.id == action.payload.id){
                    return action.payload
                }
                return e
            })
    },
    togglecompleted : (state , action)=>{
        // state ko mutate krna allow hai payload ko nhi yaha pe ek error bhi yahi aa raha tha ki mai playload ko change kr raha tha balki state ko change krna hoga 
      state.todos =  state.todos.map((e)=>{
            if(e.id == action.payload.id){
                e.completed = !e.completed
                return e
            }
            return e
        })
    }
    }

})


export const {addtodo , deletetodo , updatetodo ,togglecompleted} = todoSlice.actions

// here we are expoting the reducers so that store has the access of the reducers which are going to change it 
export default todoSlice.reducer 