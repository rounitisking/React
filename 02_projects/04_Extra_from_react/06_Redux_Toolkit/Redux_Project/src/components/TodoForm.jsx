// yaha pr hamne usedispatch ka use kiya hai kyuki ismai hame ek value todos mai set kiya tha 

import { useState } from "react";

//dispatch ek reducer ka use krke state mai changes krta hai 
import { useDispatch } from "react-redux";
import {addtodo} from "../features/todo/todoSlice"
export function TodoForm() {
    const [value , setvalue] = useState("")
    const dispatch = useDispatch()


    function settingvalue(e){
        setvalue(e.target.value)
    }

    function addingvalue(e){
            
        e.preventDefault()
        if(value != ""){
            
            dispatch(addtodo({msg : value , completed : false}))            
            
        }

        setvalue("")
    }


    return (
        <form  className="flex">
            <input
                onChange={settingvalue}
                value={value}
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
            />
            <button onClick={addingvalue} type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}



