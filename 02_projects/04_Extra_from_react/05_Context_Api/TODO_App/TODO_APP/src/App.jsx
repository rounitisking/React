import { useEffect, useState } from 'react'
import {TodoContextProvider} from "./context/TodoContext"
import {TodoForm , TodoItem} from "./components/index"


function App() {
  // hamne yaha prjo todos define kiya hai usse hame sare todos mil rhe hai 
  const [todos, settodos] = useState([])
  const addtodo = (todo)=>{
      settodos(prev => [...prev, todo])
  }


  const updatetodo = (todo)=>{

     settodos(prev => {
                //ismai hame ek loop laga ke pehle uss todo ko find krna parega then we update that todo
      return prev.map((e)=>{
        if(e.id == todo.id){
            return todo
        }
        return e
      })
      })

  }


  const deletetodo = (id)=>{

        settodos(prev => prev.filter((ele)=> ele.id != id ))
  }


  const toggleCompleted= (id)=>{

      settodos(prev => prev.map((ele)=>{

              if(ele.id == id){
                  
                  return {...ele , completed : !ele.completed}
              }
              return ele
      }) )
  
  }


  // here i am storing the todos in the local storage of the browser -- react mai ham local storage ko direct access kr paate hai 

  useEffect(()=>{
    //json.parse convert the string into json
      const initial_todo = JSON.parse(localStorage.getItem("todos"))

      if(initial_todo && initial_todo.length != 0 ){
        settodos(initial_todo)
      }
  }, [])


  useEffect(()=>{
    //json.stringify convert the json into string
      localStorage.setItem("todos", JSON.stringify(todos))
  } , [todos])

  return (
    <TodoContextProvider value={{todos , addtodo,updatetodo ,deletetodo  ,toggleCompleted}}>

        
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        <TodoForm/> 
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {todos.map((ele)=>{
                          return <div className='w-full' key={ele.id}>
                                <TodoItem todo={ele}/>

                          </div>
                        })}
                    </div>
                </div>
  </div>
    </TodoContextProvider>
  )
}

export default App
