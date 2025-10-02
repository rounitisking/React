//yaha pr ham useselector ka use karenge kyuki yaha pr hame value ko display krna hai and ham value ko store se access krte hai 
//yaha pr ham usedispatch ka bhi use karenge kyuki value ko access krne ke baad hame value dubara store mai bhejna hai 
import { useSelector , useDispatch} from 'react-redux'
import './App.css'
import {TodoItem , TodoForm} from "./components/index"
import { useEffect } from 'react'
import { addtodo } from './features/todo/todoSlice'
function App() {
    const dispatch = useDispatch()
  const todoArray = useSelector(state => state.todos)
  console.log(todoArray)


  // yaha pr mai local storage mai save kr raha hu jab bhi mai todoarray mai save kr raha hu 
    useEffect(()=>{
        localStorage.setItem("todo" , JSON.stringify(todoArray))
    },[todoArray])
    

    // ye ham hi kr skte hai 


    // // yaha pr mai local storage se jaise hi page reload hoga mai value access hoga 
    // useEffect(()=>{
        
    //     const value = JSON.parse(localStorage.getItem("todo"))
    //     console.log(value)
    //     if(value && value.length != 0){
            
    //         console.log(value)
    //         value.map((e)=>{

    //             return dispatch(addtodo(e))
    //         })
    //     }
    // },[])
6
  
  return (
    

     <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        <TodoForm/> 
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {todoArray.map((ele)=>{
                          return  <div className='w-full' key={ele.id}>
                                <TodoItem todo={ele}/> 
                             </div>
                        })}
                    </div>
                </div>
            </div>
    
    
  )
}

export default App
