import { useState } from "react";
import { useTodo } from "../context/TodoContext";
function TodoForm() {
    const {addtodo} = useTodo()
    
    const [value , setvalue] = useState("")
   

    function todovalue(e){
        
        setvalue(e.target.value)

    }

    function submit(e){
        e.preventDefault()
        
        if(value != ""){
            
            addtodo({
                id : Date.now(),
                msg : value,
                completed : false 
            })
            
            
            
        }
        
        setvalue("")

       
    }




    return (
        <form  className="flex">
            <input
                onChange={todovalue}
                value={value}
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
            />
            <button onClick={submit} type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;